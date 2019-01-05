# 冲突产生原因及解决方法
> 使用SourceTree

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
    - 多个人同事操作了同一个文件
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