# Git 使用规范
> 本文只针对广研Git的的使用规范，不对Git的命令操作做具体介绍，如果想深入使用Git的命令操作可以自行学习。     
> 本文主要针对Git多人协作       
> 本文结合SourceTree一起使用，SourceTree使用可以参看[《SourceTree使用教程》](https://zhicaizhu123.github.io/detail/sourcetree/)        

## 代码发布流程
- 发布开发及测试环境
  - 将需求代码合并到对应环境分支中，并提交到远端
  - 发布开发环境，则登录http://tzdtz.com:8080/
  - 发布测试环境，则登录http://jenkins.tzdtz.com/ （[jenkins使用教程]()）
  - 选择对应项目进行发布
  - jenkins将自动拉取git中对应分支的代码进行发布
- 发布预发布环境（多人协作）及正式环境
  - 将需求代码合并到对应环境分支中，并提交到远端
  - 打版本tag，并以"prefix_YYYY-MM-DD_version_X.X_index"格式命名，如"pre_2018-07-12_version_1.0_1"（如果当天同一版本多次发布数，index依次递增，那么tag命名依次为"pre_2018-07-12_version_1.0_1"，"pre_2018-07-12_version_1.0_2"， "pre_2018-07-12_version_1.0_3"， ...）
  - 将tag提交到远程
  - 登录http://jenkins.tzdtz.com/ （[jenkins使用教程]()）
  - 找到对应项目，选择想要发布的tag进行发布

## 分支说明
- `master` 生产环境分支：     
- `fixbug` 生产环境紧急bug处理分支：    
    这个分支用来做生产环境bug紧急修复，它来自`master`分支；   
    fixbug分支命名规则："YYYY-MM-DD_fixbug_bugname"，如： "2018-10-01_fixbug_arrange_course"。
- `pre` 预发布环境分支（多人协作）
- `test` 测试环境分支
- `dev` 开发环境分支
- `feature` 功能分支：    
    feature分支命名规则: "YYYY-MM-DD_version_X.X"，如："2018-10-01_version_2.3"。

**注意：**  
- `master`，`pre`, `test`， `dev`只能从feature和fixbug分支合并
- 切勿在`master`， `pre`， `test`， `dev`分支直接修改代码，修改代码需要在feature或fixbug分支修改
- 环境分支只能被合并，即添加新代码，不能合并到其他分支，即不可迁出代码，防止代码污染
- 需求上线后，将代码合并到`master`分支，并删除远端和本地端的新建的feature分支和fixbug分支

## feature分支和fixbug分支及tag命名规范
- feature分支命名规则："YYYY-MM-DD_version_X.X"，如："2018-10-01_version_2.3"。
- fixbug分支命名规则："YYYY-MM-DD_fixbug_bugname"，如： "2018-10-01_fixbug_arrange_course"。
- tag 命名规则： "prefix_YYYY-MM-DD_version_X.X_index"，如： "prod_2018-07-12_version_1.0_1"。prefix可能为prod(生产环境)、pre(预发布环境)、fixbug(紧急bug修复)

## 开发流程
1. 切换到`master`主干，拉取最新代码
    - 命令行：
    
    ``` bash
    git pull origin master
    ```
    - SourceTree：
    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7eb6a8f93195?w=903&h=477&f=png&s=78470">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7eb6a8f93195?w=903&h=477&f=png&s=78470)</a>
    
2. 从master拉取创建feature分支
    - 命令行：    
    
    ``` bash
    // 例如当前需要开发crm2.3版本
    git checkout -b 2018-10-01_version2.3
    
    // 开发完成后提交到历史版本
    git add .
    git commit -m '提交信息说明'
    ```
    - SourceTree：   
    创建并切换到功能分支    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7ef26e828e5d?w=1352&h=412&f=png&s=121460">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7ef26e828e5d?w=1352&h=412&f=png&s=121460)</a>      
    开发完成后提交到历史版本    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7f676b50d620?w=1234&h=396&f=png&s=100036">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7f676b50d620?w=1234&h=396&f=png&s=100036)</a>      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7f8d1993031e?w=1352&h=672&f=png&s=82698">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7f8d1993031e?w=1352&h=672&f=png&s=82698)</a>
3. 开发完功能后，合并到开发环境， 合并完后记得切换回个人分支，预防直接修改`dev`分支代码
    - 命令行：
    
    ``` bash
    // 切换到dev开发环境
    git checkout dev
    
    // 拉取最新的dev分支代码
    git pull origin dev
    
    // 合并2018-10-01_version_2.3分支到开发环境， 如果在合并过程中出现冲突，需要解决提交才进行下一步操作
    git merge --no-ff 2018-10-01_version_2.3
    
    
    // 提交到远程dev
    git push origin dev
    
    // 切换回2018-10-01_version_2.3分支
    git checkout 2018-10-01_version_2.3
    ```
    - SourceTree：   
    切换到dev分支，获取远程最新代码     
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7f2dc5f1a861?w=1157&h=458&f=png&s=110597">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7f2dc5f1a861?w=1157&h=458&f=png&s=110597)</a>      
    合并功能分支代码到dev分支   
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7fd8825da4c5?w=1343&h=389&f=png&s=123520">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7fd8825da4c5?w=1343&h=389&f=png&s=123520)</a>      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e8001ac557f80?w=1346&h=685&f=png&s=160175">![](https://user-gold-cdn.xitu.io/2018/12/26/167e8001ac557f80?w=1346&h=685&f=png&s=160175)</a>      
    如果合并过程中发生冲突，需要解决提交后才进行下一步操作，[冲突解决方案](#解决冲突)       
    推送dev到远程库     
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e804c475310a0?w=1350&h=415&f=png&s=127402">![](https://user-gold-cdn.xitu.io/2018/12/26/167e804c475310a0?w=1350&h=415&f=png&s=127402)</a>      
    
4. 开发环境联调测试没有问题后，提交到测试环境，合并完后记得切换回个人分支，预防直接修改`test`分支代码(测试人员介入测试)
    - 命令行：
    
    ``` bash
    // 切换到test测试环境
    git checkout test
    
    // 拉取最新的test分支代码
    git pull origin test
    
    // 合并2018-10-01_version_2.3分支到开发环境
    git merge --no-ff 2018-10-01_version_2.3
    
    // 提交到远程dev
    git push origin test
    
    // 切换回2018-10-01_version_2.3分支
    git checkout 2018-10-01_version_2.3
    ```
    
    - SourceTree：   
    切换到test分支，获取远程最新代码       
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e8090831f904c?w=1343&h=494&f=png&s=152238">![](https://user-gold-cdn.xitu.io/2018/12/26/167e8090831f904c?w=1343&h=494&f=png&s=152238)</a>      
    合并功能分支到test分支      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e80ad802a843b?w=1358&h=388&f=png&s=120936">![](https://user-gold-cdn.xitu.io/2018/12/26/167e80ad802a843b?w=1358&h=388&f=png&s=120936)</a>      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e80c99425348d?w=1351&h=689&f=png&s=163342">![](https://user-gold-cdn.xitu.io/2018/12/26/167e80c99425348d?w=1351&h=689&f=png&s=163342)</a>      
    如果合并过程中发生冲突，需要解决提交后才进行下一步操作，[冲突解决方案](#解决冲突)       
    推送test到远程库        
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e80f6dba8d68e?w=1403&h=401&f=png&s=128212">![](https://user-gold-cdn.xitu.io/2018/12/26/167e80f6dba8d68e?w=1403&h=401&f=png&s=128212)</a>      
5. 测试环境测试人员确定没有问题，可以上pre预发布环境，合并完后记得切换回个人分支，预防直接修改`pre`分支代码(测试人员介入测试)       
    - 命令行：    
    
    ``` bash
    // 切换到pre测试环境
    git checkout pre
    
    // 拉取最新的pre分支代码
    git pull origin pre
    
    // 合并2018-10-01_version_2.3分支到开发环境
    git merge --no-ff 2018-10-01_version_2.3
    
    // 提交到远程pre
    git push origin pre
    
    // 打版本tag，提交到远程库(tag名称规则：打tag日期+功能版本+索引值)
    git tag pre_2018-10-01_version_2.3_1 -m 'crm v2.3相关功能开发'
    git push origin pre_2018-10-01_version_2.3_1
    
    // 切换回2018-10-01_crm_version_2.3分支
    git checkout 2018-10-01_version_2.3
    ```
    
    - SourceTree：     
    可以参看上面将功能分支到dev和test分支流程，不过这个步骤添加了打版本tag环节      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e81742581c114?w=1349&h=493&f=png&s=143454">![](https://user-gold-cdn.xitu.io/2018/12/26/167e81742581c114?w=1349&h=493&f=png&s=143454)</a>      
    如果需要将tag推送到远程库可以执行以下操作       
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e818c8c28acc5?w=1357&h=638&f=png&s=171229">![](https://user-gold-cdn.xitu.io/2018/12/26/167e818c8c28acc5?w=1357&h=638&f=png&s=171229)</a>      
6. 预发布测试没有问题而且接收到测试人员的上线通知邮件，提交到生产环境       
    - 命令行：  
    ``` bash
    // 切换到pre测试环境
    git checkout master
    
    // 拉取最新的pre分支代码
    git pull origin master
    
    // 合并20181001-crm-2.3分支到开发环境
    git merge --no-ff 2018-10-01_version_2.3
    
    // 提交到远程master
    git push origin master
    
    // 打tag，提交到远程库(tag名称规则：打tag日期+功能版本+索引值)
    git tag prod_2018-10-01_version_2.3_1 -m 'crm v2.3相关功能开发'
    git push origin prod_2018-10-01_version_2.3_1
    
    // 切换回20181001-crm-2.3分支
    git checkout 2018-10-01_version_2.3_1
    ```
    - SourceTree：   
    可以参看上面将功能分支到pre分支流程      
<!--## 创建分支-->
<!--在git里建立分支非常简单-->
<!--- 用普通方式建立新分支并切换过去：  -->
<!--``` bash-->
<!--git branch 2018-10-01_version_2.3-->
<!--git checkout 2018-10-01_version_2.3-->
<!--```-->
<!--- 如果你确定自己直接切换到新建的分支，可以用一个命令实现：-->
<!--``` bash -->
<!--git checkout -b 2018-10-01_version_2.3-->
<!--```-->
<!--- 重命名分支-->
<!--``` bash-->
<!--# 重命名分支version_2.3为2018-10-01_version_2.3-->
<!--git checkout -b 2018-10-01_version_2.3 version_2.3-->

<!--# 删除分支version_2.3 -->
<!--git branch -d version_2.3 -->
<!--```-->

<!--## 删除分支-->
<!--- 删除本地分支-->
<!--``` bash-->
<!--git branch -d 2018-10-01_version_2.3-->
<!--```-->
<!--- 删除远程分支-->
<!--``` bash-->
<!--git push origin :2018-10-01_version_2.3-->
<!--```-->

<!--## 合并分支-->
<!--``` bash-->
<!--git checkout master-->
<!--git merge feature83 # 或者…-->
<!--git rebase feature83-->
<!--```-->
<!--merge和rebase之间的差别是merge会尝试处理改动并建立一个新的混合了两者的提交。rebase会尝试把你从一个分支最后一次分离后的所有改动，一个个加到该分支的HEAD上。不过，在已经将分支推到远端服务器后不要再rebase了-->

## 解决冲突
以下操作主要针对通过Git命令行解决冲突，SourceTree解决冲突方案可以参看[SourceTree冲突和解决方式](https://zhicaizhu123.github.io/detail/sourcetree/#%E5%86%B2%E7%AA%81%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E5%BC%8F)      
- 场景一：两个或多个开发人员修改了同一行代码，`git merge`合并出现错误如图所示          
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/20/167ca71b2cff20fe?w=567&h=58&f=png&s=6627">![](https://user-gold-cdn.xitu.io/2018/12/20/167ca71b2cff20fe?w=567&h=58&f=png&s=6627)</a>     
    解决办法：  
        与相关的小伙伴协商修改，处理后`git add`，`git commit`, `git push`
- 场景二：`git push` 推送代码到远程库时，远程库最新提交和你试图推送的提交有冲突，其实这个也是相当于把本地库合并到远程库的操作，错误信息如图所示      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/20/167ca77274629671?w=573&h=136&f=png&s=17070">![](https://user-gold-cdn.xitu.io/2018/12/20/167ca77274629671?w=573&h=136&f=png&s=17070)</a>    
    解决办法：  
        先使用`git pull origin branch_name`（git fetch + git merge）         把最新的代码拉取下来（先获取后合并，所以出现的错误信息和`git merge` 的一样），解决冲突      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/20/167ca7aec0119105?w=564&h=177&f=png&s=18904">![](https://user-gold-cdn.xitu.io/2018/12/20/167ca7aec0119105?w=564&h=177&f=png&s=18904)</a>    
        处理后使用`git add`, `git commit`, `git push`再次推送       
- 场景三： 树冲突，文件删除或者重命名，有一个file.js文件，小伙伴A把文件改名为fileA.js，小伙伴B把同一个文件改名为fileB.js，那么小伙伴B将这两个commit合并时，会产生冲突，错误如图所示     
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/20/167ca875175acd0c?w=570&h=122&f=png&s=17032">![](https://user-gold-cdn.xitu.io/2018/12/20/167ca875175acd0c?w=570&h=122&f=png&s=17032)</a>    
    解决办法： 与小伙伴协商取舍，假如最终确定使用小伙伴B的文件名        
    
    ``` bash 
    # 删除fileA.js
    git rm -r fileA.js
    
    # 删除file.js
    git rm -r file.js
    
    # 将fileB.js加入到暂存区
    git add fileB.js
    
    # 提交
    git commit -m '说明'
    
    # 推送
    git push origin branch_name
        ```

## 减少代码冲突的措施
- 容易产生冲突的操作方式
    - 在环境分支（`master`, `pre`, `test`, `dev`）直接修改代码
    - 多个人同时操作了同一个文件
    - 一个人很长时间没有提交代码
    - 修改之前没有更新最新代码
    - 擅自修改其它小伙伴的代码
- 减少冲突的操作方式
    - 避免在环境分支（`master`, `pre`, `test`, `dev`）修改代码
    - 先pull再修改，修改完需要提交add, commit, pull, push
    - 确保自己正在修改的文件是最新版本
    - 各自开发各自的功能模块
    - 下班前提交代码，上班时拉取最新代码
    - 不要擅自修改其它小伙伴的代码

## 撤销和回滚
以下操作主要针对通过Git命令行撤销回滚，SourceTree撤销和回滚可以参看[SourceTree版本回退](https://zhicaizhu123.github.io/detail/sourcetree/#%E7%89%88%E6%9C%AC%E5%9B%9E%E9%80%80)
- 本地仓库：
    - 场景一：文件被修改了，但未执行`git add`操作（未暂存）
        
        ``` bash
        # 撤销单个文件修改
        git checkout <filename>
        # 撤销全部文件修改
        git checkout .
        ```
    - 场景二：同时对多个文件执行了`git add`操作，但本次只想提交其中一部分文件（已暂存）
        
        ``` bash
        # 取消单个文件暂存
        git reset HEAD <filename>
        # 取消全部文件暂存
        git reset HEAD .
        ```
    - 场景三：文件执行了`git add`操作，但想撤销对其的修改
        
        ```
        # 取消暂存
        git reset HEAD <filename>
        # 撤销修改
        git checkout <filename>
        ```
    - 场景四：修改的文件已被`commit`，但想再次修改不再产生新的commit
        
        ``` bash
        # 修改最后一次提交 
        git add <filename>
        git commit --amend -m "描述说明"
        ```
    - 场景五：已在本地进行了多次`git commit`操作，现在想撤销到其中某次commit
        
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
    - 通过tag回滚。     
        如果你每次更新线上，都会打版本tag，你可以很快的处理这种的情况（所以这是为什么生产环境和预发布环境都要打版本tag），直接在jenkins上指定发布需要发布的tag
    - 回滚到指定版本（不是迫不得已不要使用`git reset` 回滚远程库版本）
        
        ``` bash
        git revert <commitId|HEAD>
        git push origin <originBranchname>
        ```
        `git reset` 和 `get revert`的区别：     
        1. `git revert`是用一次新的commit来回滚之前的commit，`git reset`是直接删除指定的commit
        2. 在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。因为`git revert`是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，导致这部分改变不会再次出现，但是`git reset`是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入。
        3. `git reset` 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。

## 开发中突发紧急任务处理
经常有这样的事情发生，当你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作。问题是，你不想提交进行了一半的工作，否则以后你无法回到这个工作点。解决这个问题的办法就是`git stash`命令。     
“贮藏”可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用。

以下操作主要针对通过Git命令行撤销回滚，SourceTree撤销和回滚可以参看[SourceTree开发中突发紧急任务处理](https://zhicaizhu123.github.io/detail/sourcetree/#%E5%BC%80%E5%8F%91%E4%B8%AD%E7%AA%81%E5%8F%91%E7%B4%A7%E6%80%A5%E4%BB%BB%E5%8A%A1%E5%A4%84%E7%90%86)

``` bash
# 贮藏当前工作点
git stash

# 应用最近一次的贮藏
git stash apply

# 查看现有的贮藏
git stash list
# stash@{0}: WIP on master: 049d078 added the index file
# stash@{1}: WIP on master: c264051 Revert "added file_size"
# stash@{2}: WIP on master: 21d80a5 added number to log

# 应用更早的贮藏
git stash apply stash@{1}

# 删除贮藏
git stash drop stash@{1}

# 应用最近一次贮藏同是删除这一次的贮藏
git stash pop
```

## 保留分支及tag规则
- 保留分支的规则（完成开发后删除相关的feature分支）：  
除了环境分支（`master`, `pre`, `test`, `dev`）其它feture分支，如果开发完已经上线确保没有问题后了，应该把它删除。     
- 保留tag规则(建议保留2个大版本)：     
    我们自己采用gitlab来搭建自己的中央版本库，如果中央版本库tag数量会变得非常多，当tag多了以后，整个网站都呈现出不是特别正常的样子，所以，就需要保持较少的tag列表，让网站保持比较高的性能。所以建议tag保留规则应该是只保留两个大版本，其它在这两个版本的tag可以删除，录入又version_1.x.x, version_2.x.x, version_3.x.x三个大版本的tag，我们只保留最新的两个大版本tag version_2.x.x, version_3.x.x，删除tag version_1.x.x
    - 删除远程库的tag   
        
        
        ``` bash
        # 首先就是找到远程库要删除的tags列表
        git show-ref --tag
        
        # 删除远程库tag
        git push origin :<tag>
        
        # 批量删除符合条件远程库tags，例如删除pre预发布环境版本打得version_1.x.x的tag，其它环境的tag以此类推
        git show-ref --tag | awk '/pre_\S*_version_1(\.[0-9]){0,}_\d+$/ {print ":" $2}' | xargs git push origin
        ```
    - 删除本地库的tag
        
        ``` bash 
        # 产看本地库tags列表
        git tag
        
        # 删除本地库tag
        git tag -d <tag>
        
        # 批量删除符合条件的本地库tags，例如删除pre预发布环境版本打得version_1.x.x的tag，其它环境的tag以此类推
        git tag -l| awk '/pre_\S*_version_1(\.[0-9]){0,}_\d+$/ {print  $1}' | xargs git tag -d
        ```

## 每天开发前先拉取，每天下班前先上传到中央仓库
在软件团队中，有一个不成文的习惯，团队成员在每天晚上下班前，先将一天工作内容推送到远程仓库，早上上班时先从中央仓库拉取项目更新。由于项目的每个成员都可以通过版本历史记录查看其它成员的工作内容和项目进展，因此也就形成了团队内部工作透明的机制。
- 开发前拉取    
    命令行：   
    
    ``` bash
    git pull origin <branch_name>
    ```
    SourceTree：     
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e82cc236285f2?w=1365&h=409&f=png&s=127620">![](https://user-gold-cdn.xitu.io/2018/12/26/167e82cc236285f2?w=1365&h=409&f=png&s=127620)</a>      
- 下班前推送到远程库    
    命令行：   
    
    ``` bash
    git add .
    git commit -m '描述说明'
    git push origin <branch_name>
    ```
    SourceTree：    
    确定修改已经提交到历史库，然后推送到远程分支    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e82d0c4a5431d?w=1358&h=378&f=png&s=117646">![](https://user-gold-cdn.xitu.io/2018/12/26/167e82d0c4a5431d?w=1358&h=378&f=png&s=117646)</a>      

## 错误提交/合并/推送的挽救方法
- 场景一： 未将修改内容提交到错误的分支
    - 命令行：      
        ``` bash 
        # 将修改的代码暂存到stash
        git stash
        
        # 切换到正确的分支
        git checkout <target_branch_name> 
        
        # 从stash中取出暂存的代码修改
        git stash pop
        
        # 提交修改
        git add .
        git commit -m '提交信息说明'
        ```
    
    - SourceTree：    
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e8640a2c02117?w=1349&h=385&f=png&s=132715">![](https://user-gold-cdn.xitu.io/2018/12/26/167e8640a2c02117?w=1349&h=385&f=png&s=132715)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e8664c2712bfd?w=1360&h=653&f=png&s=188496">![](https://user-gold-cdn.xitu.io/2018/12/26/167e8664c2712bfd?w=1360&h=653&f=png&s=188496)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e86fcbe520cb8?w=1357&h=446&f=png&s=135996">![](https://user-gold-cdn.xitu.io/2018/12/26/167e86fcbe520cb8?w=1357&h=446&f=png&s=135996)</a>  
- 场景二： 已将修改内容提交/合并到错误分支， 但未提交到远程库
    - 命令行：      
        ``` bash 
        # 撤销回退修改( 混合合并：仅重设暂存区，但是不重设工作区。这个模式是默认模式。回退到某个版本，只保留源码，回退commit和add信息 )
        git reset <commitId>
        
        # 将修改的代码暂存到stash
        git stash
        
        # 切换到正确的分支
        git checkout <target_branch_name> 
        
        # 从stash中取出暂存的代码修改
        git stash pop
        
        # 提交修改
        git add .
        git commit -m '提交信息说明'
        ```
    - SourceTree：      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e86ad291cc2b4?w=1356&h=586&f=png&s=180730">![](https://user-gold-cdn.xitu.io/2018/12/26/167e86ad291cc2b4?w=1356&h=586&f=png&s=180730)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e86b696f57289?w=1348&h=321&f=png&s=112959">![](https://user-gold-cdn.xitu.io/2018/12/26/167e86b696f57289?w=1348&h=321&f=png&s=112959)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e86c2d6c68e3b?w=1351&h=391&f=png&s=124746">![](https://user-gold-cdn.xitu.io/2018/12/26/167e86c2d6c68e3b?w=1351&h=391&f=png&s=124746)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e86e451dce867?w=1366&h=642&f=png&s=189469">![](https://user-gold-cdn.xitu.io/2018/12/26/167e86e451dce867?w=1366&h=642&f=png&s=189469)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e86fe2f81c26d?w=1357&h=446&f=png&s=135996">![](https://user-gold-cdn.xitu.io/2018/12/26/167e86fe2f81c26d?w=1357&h=446&f=png&s=135996)</a>      
- 场景三： 已经修改的内容提交到错误分支的远程库
    - 命令行：      
        ``` bash 
        # 新建一个临时分支保存当前修改状态
        git checkout -b <temp_branch>
        
        # 撤销回退修改
        git reset <commitId>
        
        # 将修改的代码暂存到stash
        git stash
        
        # 切换回错误分支
        git checkout -b <src_branch_name>
        
        # 撤销回退修改
        git revert <commitId>
        
        # 推送到到远程库
        git push origin <branch_name>
        
        # 切换到正确的分支
        git checkout <target_branch_name>
        
        # 从stash中取出暂存的代码修改
        git stash pop
        
        # 合并成功后推送到远程库
        git push origin <target_branch_name>
        
        # 合并成功后删除临时分支
        git branch -d <temp_branch>
        ```
    - SourceTree：      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e8737316043ae?w=1352&h=434&f=png&s=72886">![](https://user-gold-cdn.xitu.io/2018/12/26/167e8737316043ae?w=1352&h=434&f=png&s=72886)</a>       
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e884a3acf9d2a?w=1348&h=475&f=png&s=159258">![](https://user-gold-cdn.xitu.io/2018/12/26/167e884a3acf9d2a?w=1348&h=475&f=png&s=159258)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e884fcd95d1e6?w=1356&h=347&f=png&s=120585">![](https://user-gold-cdn.xitu.io/2018/12/26/167e884fcd95d1e6?w=1356&h=347&f=png&s=120585)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e885ad099bc12?w=1352&h=414&f=png&s=131588">![](https://user-gold-cdn.xitu.io/2018/12/26/167e885ad099bc12?w=1352&h=414&f=png&s=131588)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e874ee501aa4f?w=1349&h=568&f=png&s=176968">![](https://user-gold-cdn.xitu.io/2018/12/26/167e874ee501aa4f?w=1349&h=568&f=png&s=176968)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e8882fa1c31c5?w=1357&h=681&f=png&s=193366">![](https://user-gold-cdn.xitu.io/2018/12/26/167e8882fa1c31c5?w=1357&h=681&f=png&s=193366)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e888e7d22a9f8?w=1360&h=506&f=png&s=146960">![](https://user-gold-cdn.xitu.io/2018/12/26/167e888e7d22a9f8?w=1360&h=506&f=png&s=146960)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e889a5ff98c08?w=1360&h=506&f=png&s=146960">![](https://user-gold-cdn.xitu.io/2018/12/26/167e889a5ff98c08?w=1360&h=506&f=png&s=146960)</a>      
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e88a22eb7c0fd?w=1338&h=703&f=png&s=186601">![](https://user-gold-cdn.xitu.io/2018/12/26/167e88a22eb7c0fd?w=1338&h=703&f=png&s=186601)</a>      
        