# Git 使用规范

> 团队开发中，遵循一个合理、清晰的Git使用流程，是非常重要的。
> 否则，每个人都提交一堆杂乱无章的commit，项目很快就会变得难以协调和维护。

## 代码发布流程
- 发布开发及测试环境
  - 将需求代码合并到对应环境分支中，并提交到远端
  - 发布开发环境，则登陆http://tzdtz.com:8080/
  - 发布测试环境，则登陆http://jenkins.tzdtz.com/
  - 选择对应项目进行发布，本项目learning项目
  - jenkins将自动拉取git中对应分支的代码进行发布
- 发布预发布环境及正式环境
  - 将需求代码合并到对应环境分支中，并提交到远端
  - 打版本tag，并以env_YYYY-MM-DD_version_X.X格式命名，如pre_2018-07-12_version_1.0
  - 将tag提交到远程
  - 登录http://jenkins.tzdtz.com/
  - 找到对应项目，选择想要发布的tag进行发布

## 分支说明
- `master` 生产环境分支：     
- `fixbug` 生产环境紧急bug处理分支：    
    这个分支用来做生产环境bug紧急修复，它来自master分支；   
    fixbug分支命名规则：YYYY-MM-DD_fixbug_bugname，如： 2018-10-01_fixbug_arrange_course。
- `pre` 预发布环境分支
- `test` 测试环境分支
- `dev` 开发环境分支
- `feature` 功能分支：    
    如果是多人开发的功能，它来自master分支；     
    feature分支命名规则: YYYY-MM-DD_version_X.X，如：2018-10-01_version_2.3。

**注意：**  
- master，pre, test， dev只能从feature和fixbug分支合并
- 切勿在master， pre， test， dev分支直接修改代码，修改代码需要在feature或fixbug分支修改
- 环境分支只能被合并，即添加新代码，不能合并到其他分支，即不可迁出代码，防止代码污染
- 需求上线后，将代码合并到master分支，并删除远端和本地端的新建的feature分支和fixbug分支

## feature分支和fixbug分支及tag命名规范
- feature分支命名规则："YYYY-MM-DD_version_X.X"，如："2018-10-01_version_2.3"。
- fixbug分支命名规则："YYYY-MM-DD_fixbug_bugname"，如： "2018-10-01_fixbug_arrange_course"。
- tag 命名规则： "prefix_YYYY-MM-DD_version_X.X"，如： "prod_2018-07-12_version_1.0"。prefix可能为prod(生产环境)、pre(预发布环境)、fixbug(紧急bug修复)

## 开发流程
1. 切换到master主干，拉取最新代码
    ``` bash
    git pull origin master
    ```
2. 从master拉取创建feature分支
    ``` bash
    // 例如当前需要开发crm2.3版本
    git checkout -b 2018-10-01_version2.3
    ```
3. 开发完功能后，合并到开发环境， 合并完后记得切换回个人分支，预防直接修改dev分支代码
    ``` bash
    // 切换到dev开发环境
    git checkout dev
    
    // 拉取最新的dev分支代码
    git pull origin dev
    
    // 合并2018-10-01_version_2.3分支到开发环境
    git merge 2018-10-01_version_2.3
    
    // 提交到远程dev
    git push origin dev
    
    // 切换回2018-10-01_version_2.3分支
    git checkout 2018-10-01_version_2.3
    ```
4. 开发环境联调测试没有问题后，提交到测试环境，合并完后记得切换回个人分支，预防直接修改test分支代码(测试人员介入测试)
    ``` bash
    // 切换到test测试环境
    git checkout test
    
    // 拉取最新的test分支代码
    git pull origin test
    
    // 合并2018-10-01_version_2.3分支到开发环境
    git merge 2018-10-01_version_2.3
    
    // 提交到远程dev
    git push origin test
    
    // 切换回2018-10-01_version_2.3分支
    git checkout 2018-10-01_version_2.3
    ```
5. 测试环境测试人员确定没有问题，可以上pre预发布环境，合并完后记得切换回个人分支，预防直接修改pre分支代码(测试人员介入测试)
    ``` bash
    // 切换到pre测试环境
    git checkout pre
    
    // 拉取最新的pre分支代码
    git pull origin pre
    
    // 合并2018-10-01_version_2.3分支到开发环境
    git merge 2018-10-01_version_2.3
    
    // 提交到远程pre
    git push origin pre
    
    // 打版本tag，提交到远程库(tag名称规则：打tag日期+功能版本)
    git tag pre_2018-10-01_version_2.3 -m 'crm v2.3相关功能开发'
    git push origin pre_2018-10-01_version_2.3
    
    // 切换回2018-10-01_crm_version_2.3分支
    git checkout 2018-10-01_version_2.3
    ```
6. 预发布测试没有问题而且接收到测试人员的上线通知邮件，提交到生产环境
    ``` bash
    // 切换到pre测试环境
    git checkout master
    
    // 拉取最新的pre分支代码
    git pull origin master
    
    // 合并20181001-crm-2.3分支到开发环境
    git merge 2018-10-01_version_2.3
    
    // 提交到远程master
    git push origin master
    
    // 打tag，提交到远程库(tag名称规则：打tag日期+功能版本)
    git tag prod_2018-10-01_version_2.3 -m 'crm v2.3相关功能开发'
    git push origin prod_2018-10-01_version_2.3
    
    // 切换回20181001-crm-2.3分支
    git checkout 2018-10-01_version_2.3
    ```

## 多人协作规范

## 如何解决冲突
- 编辑冲突：    
    - 场景：    
        通常发生在两个开发者对同一份代码做了不同的修改的时候，在这种情况下，Git往往无法自行判确定哪一种才是正确的。
    - 解决编辑冲突：    
        - 手动合并：    
            编辑冲突文件，考虑自己想要采用的选项，然后在编辑器删除冲突标志所在的剩余部分即可，但是这种方式对于二进制文件不适用，但是我们可以采用以下方式：
            ``` bash
            // 使用checkout 命令选择采用自己的还是别人的版本的文件(--ours 或 --theirs)
            git checkout --theirs <filename>
            
            // 注册修改
            git add .
            
            // 提交
            git commit xxx
            ```
            如果想取消合并操作可以使用以下命令取消
            ``` bash
            git reset --merge
            ```
        - 使用SourceTree合并：
- 内容冲突：
    > 通常发生在两个开发者对某份代码的几个部分做了各自修改的时候。例如这种情况就容易导致这类错误：当一个开发者修改了某一个函数的时候，另一个开发者也在同一时间修改了同一个函数。

## 撤销和回滚
- 本地仓库：
    - 场景一：文件被修改了，但未执行git add操作（未暂存）
        ``` bash
        # 撤销单个文件修改
        git checkout <filename>
        # 撤销全部文件修改
        git checkout .
        ```
    - 场景二：同时对多个文件执行了git add操作，但本次只想提交其中一部分文件（已暂存）
        ``` bash
        # 取消单个文件暂存
        git reset HEAD <filename>
        # 取消全部文件暂存
        git reset HEAD .
        ```
    - 场景三：文件执行了git add操作，但想撤销对其的修改
        ```
        # 取消暂存
        git reset HEAD <filename>
        # 撤销修改
        git checkout <filename>
        ```
    - 场景四：修改的文件已被git commit，但想再次修改不再产生新的commit
        ``` bash
        # 修改最后一次提交 
        git add <filename>
        git commit --amend -m "描述说明"
        ```
    - 场景五：已在本地进行了多次git commit操作，现在想撤销到其中某次commit
        ``` bash
        git reset [--hard|soft|mixed|merge|keep] [commit|HEAD]
        ```
        --hard：重设暂存区和工作区，从commit以来在工作区中的任何改变都被丢弃，并把HEAD指向commit，彻底回退到某个版本，本地的源码也会变为上一个版本的内容（三思而后行）     
        --soft： 暂存区和工作区中的内容不作任何改变，仅仅把HEAD指向commit，退到某个版本，只回退了commit的信息。如果还要提交，直接commit即可      
        --mixed：仅重设暂存区，但是不重设工作区。这个模式是默认模式。回退到某个版本，只保留源码，回退commit和add信息        
        reset常用示例
        - 回退add操作   
            ``` bash
            # 撤销暂存区，不改变工作区
            git reset HEAD <filename>
            git reset HEAD .
            ```
            说明：可以将文件从“已暂存”状态（Index区）回滚到初始状态。
        - 回退最后指定版本的提交
            ``` bash
            # 回退最后一次提交
            # hard方式
            git reset --hard <commitId|HEAD>
            
            # soft方式
            git reset --soft <commitId|HEAD>
            
            # mixed方式
            get reset <commitId|HEAD>
            ```
- 远程仓库：
    注意：对远程仓库做回滚操作是有风险的，需提前做好备份和通知其他小伙伴！
    - 如果你每次更新线上，都会打版本tag，你可以很快的处理这种的情况（所以这是为什么生产环境和预发布环境都要打版本tag），直接在jenkins上指定发布需要发布的tag
    - 回滚到指定版本
        ``` bash
        git revert <commitId|HEAD>
        git push origin <originBranchname>
        ```
        git reset 和 get revert的区别：     
        1. git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit
        2. 在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。因为git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，导致这部分改变不会再次出现，但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入。
        3. git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。

## 开发中突发紧急任务
经常有这样的事情发生，当你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作。问题是，你不想提交进行了一半的工作，否则以后你无法回到这个工作点。解决这个问题的办法就是git stash命令。     
“储藏”可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用。
``` bash
# 储藏当前工作点
git stash

# 应用最近一次的储藏
git stash apply

# 查看现有的储藏
git stash list
# stash@{0}: WIP on master: 049d078 added the index file
# stash@{1}: WIP on master: c264051 Revert "added file_size"
# stash@{2}: WIP on master: 21d80a5 added number to log

# 应用更早的储藏
git stash apply stash@{1}

# 删除储藏
git stash drop stash@{1}

# 应用最近一次储藏同是删除这一次的储藏
git stash pop
```

## 保留分支及tag数
我们自己采用gitlab来搭建自己的中央版本库，如果中央版本库tag数量会变得非常多，当tag多了以后，整个网站都呈现出不是特别正常的样子，所以，就需要保持较少的tag列表，让网站保持比较高的性能。     
- 删除远程库的tag   
    
    ``` bash
    # 首先就是找到远程库要删除的tags列表
    git show-ref --tag
    
    # 删除远程库tag
    git push origin :<tag>
    
    # 批量删除符合条件远程库tags
    git show-ref --tag | awk '/(.*)(\s+)(.*)$/ {print ":" $2}' | xargs git push origin
    ```
- 删除本地库的tag
    ``` bash 
    # 产看本地库tags列表
    git tag
    
    # 删除本地库tag
    git tag -d <tag>
    
    # 批量删除符合条件的本地库tags
    git tag | grep "v1.1.0.\d$" | xargs git tag -d
    ```
## 每天下班提交代码

## 每天上班班拉取代码
