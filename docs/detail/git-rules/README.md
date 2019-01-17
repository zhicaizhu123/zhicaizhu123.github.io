# Git 项目使用规范     
> 本文主要针对Git多人协作       
> 本文结合SourceTree一起使用，SourceTree使用可以参看[《SourceTree使用教程》](http://wiki.tzdtz.com/pages/viewpage.action?pageId=3835694)   

## 准备工作
- Git版本管理工具 ([下载地址](https://git-scm.com/downloads))       
- 安装SourceTree ([下载地址](https://www.sourcetreeapp.com/))  

## 代码发布流程
- 发布开发及测试环境
  - 将需求代码合并到对应环境分支中，并提交到远端
  - 发布开发环境，则登录http://tzdtz.com:8080/
  - 发布测试环境，则登录http://jenkins.tzdtz.com/ （[jenkins使用教程]()）
  - 选择对应项目进行发布
  - jenkins将自动拉取git中对应分支的代码进行发布
- 发布预发布环境及正式环境
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
- `pre` 预发布环境分支
- `test` 测试环境分支
- `dev` 开发环境分支
- `feature` 功能分支：    
    feature分支命名规则: "YYYY-MM-DD_version_X.X"，如："2018-10-01_version_2.3"。

**注意：**  
- `master`，`pre`, `test`， `dev`只能从`feature`和`fixbug`分支合并
- 切勿在`master`， `pre`， `test`， `dev`分支直接修改代码，修改代码需要在`feature`或`fixbug`分支修改
- 环境分支只能被合并，即添加新代码，不能合并到其他分支，即不可迁出代码，防止代码污染
- 需求上线后，将代码合并到`master`分支，并删除远端和本地端的新建的`feature`分支和`fixbug`分支

## feature分支和fixbug分支及tag命名规范
- `feature`分支命名规则："YYYY-MM-DD_version_X.X"，如："2018-10-01_version_2.3"。
- `fixbug`分支命名规则："YYYY-MM-DD_fixbug_bugname"，如： "2018-10-01_fixbug_arrange_course"。
- tag 命名规则： "prefix_YYYY-MM-DD_version_X.X_index"，如： "prod_2018-07-12_version_1.0_1"。prefix可能为prod(生产环境)、pre(预发布环境)、fixbug(紧急bug修复)

## 开发流程
1. 切换到`master`主干，拉取最新代码
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7eb6a8f93195?w=903&h=477&f=png&s=78470">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7eb6a8f93195?w=903&h=477&f=png&s=78470)</a>
    
2. 从`master`拉取创建`feature`分支  
  创建并切换到功能分支    
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7ef26e828e5d?w=1352&h=412&f=png&s=121460">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7ef26e828e5d?w=1352&h=412&f=png&s=121460)</a>      
  开发完成后提交到历史版本    
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7f676b50d620?w=1234&h=396&f=png&s=100036">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7f676b50d620?w=1234&h=396&f=png&s=100036)</a>      
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7f8d1993031e?w=1352&h=672&f=png&s=82698">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7f8d1993031e?w=1352&h=672&f=png&s=82698)</a>
3. 开发完功能后，合并到开发环境， 合并完后记得切换回个人分支，预防直接修改`dev`分支代码 
  切换到`dev`分支，获取远程最新代码     
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7f2dc5f1a861?w=1157&h=458&f=png&s=110597">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7f2dc5f1a861?w=1157&h=458&f=png&s=110597)</a>      
  合并功能分支代码到`dev`分支   
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e7fd8825da4c5?w=1343&h=389&f=png&s=123520">![](https://user-gold-cdn.xitu.io/2018/12/26/167e7fd8825da4c5?w=1343&h=389&f=png&s=123520)</a>      
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e8001ac557f80?w=1346&h=685&f=png&s=160175">![](https://user-gold-cdn.xitu.io/2018/12/26/167e8001ac557f80?w=1346&h=685&f=png&s=160175)</a>      
  如果合并过程中发生冲突，需要解决提交后才进行下一步操作       
  推送`dev`到远程库     
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e804c475310a0?w=1350&h=415&f=png&s=127402">![](https://user-gold-cdn.xitu.io/2018/12/26/167e804c475310a0?w=1350&h=415&f=png&s=127402)</a>      
    
4. 开发环境联调测试没有问题后，提交到测试环境，合并完后记得切换回个人分支，预防直接修改`test`分支代码(测试人员介入测试)   
  切换到test分支，获取远程最新代码       
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e8090831f904c?w=1343&h=494&f=png&s=152238">![](https://user-gold-cdn.xitu.io/2018/12/26/167e8090831f904c?w=1343&h=494&f=png&s=152238)</a>      
  合并功能分支到`test`分支      
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e80ad802a843b?w=1358&h=388&f=png&s=120936">![](https://user-gold-cdn.xitu.io/2018/12/26/167e80ad802a843b?w=1358&h=388&f=png&s=120936)</a>      
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e80c99425348d?w=1351&h=689&f=png&s=163342">![](https://user-gold-cdn.xitu.io/2018/12/26/167e80c99425348d?w=1351&h=689&f=png&s=163342)</a>      
  如果合并过程中发生冲突，需要解决提交后才进行下一步操作       
  推送`test`到远程库        
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e80f6dba8d68e?w=1403&h=401&f=png&s=128212">![](https://user-gold-cdn.xitu.io/2018/12/26/167e80f6dba8d68e?w=1403&h=401&f=png&s=128212)</a>      
5. 如果是个人开发，不是多人协作可以忽略这一步，直接执行下一步。测试环境测试人员确定没有问题，可以上pre预发布环境，合并完后记得切换回个人分支，预防直接修改`pre`分支代码(测试人员介入测试)           
  可以参看上面将功能分支到`dev`和`test`分支流程，不过这个步骤添加了打版本tag环节      
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e81742581c114?w=1349&h=493&f=png&s=143454">![](https://user-gold-cdn.xitu.io/2018/12/26/167e81742581c114?w=1349&h=493&f=png&s=143454)</a>      
  如果需要将tag推送到远程库可以执行以下操作       
  <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e818c8c28acc5?w=1357&h=638&f=png&s=171229">![](https://user-gold-cdn.xitu.io/2018/12/26/167e818c8c28acc5?w=1357&h=638&f=png&s=171229)</a>      
6. 预发布测试没有问题而且接收到测试人员的上线通知邮件，提交到生产环境        
  可以参看上面`pre`分支操作将`feature`功能分支到`master`分支流程，如果是多人协作可以      

## 保留分支及tag数规则
- 保留分支的规则：  
    除了环境分支（`master`, `pre`, `test`, `dev`）其它`feture`分支，如果开发完已经上线确保没有问题后了，保留最新的两个`feature`功能分支，删除其它`feature`功能分支。     
- 保留tag规则(建议保留2个大版本)：     
    采用gitlab来搭建自己的中央版本库，如果中央版本库tag数量会变得非常多，当tag多了以后，整个网站都呈现出不是特别正常的样子，所以，就需要保持较少的tag列表，让网站保持比较高的性能。所以建议tag保留规则应该是只保留两个大版本，其它在这两个版本的tag可以删除，录入又version_1.x.x, version_2.x.x, version_3.x.x三个大版本的tag，只保留最新的两个大版本tag version_2.x.x, version_3.x.x，删除tag version_1.x.x
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

## 每天开发前先拉取，下班前上传到中央仓库
在软件团队中，有一个不成文的习惯，团队成员在每天晚上下班前，先将一天工作内容推送到远程仓库，早上上班时先从中央仓库拉取项目更新。由于项目的每个成员都可以通过版本历史记录查看其它成员的工作内容和项目进展，因此也就形成了团队内部工作透明的机制。
- 开发前拉取      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e82cc236285f2?w=1365&h=409&f=png&s=127620">![](https://user-gold-cdn.xitu.io/2018/12/26/167e82cc236285f2?w=1365&h=409&f=png&s=127620)</a>      
- 下班前推送到远程库        
    确定修改已经提交到历史库，然后推送到远程分支    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/26/167e82d0c4a5431d?w=1358&h=378&f=png&s=117646">![](https://user-gold-cdn.xitu.io/2018/12/26/167e82d0c4a5431d?w=1358&h=378&f=png&s=117646)</a>      


## 开发中突发紧急任务处理
如果在开发过程中突然接到一个线上bug或者当前项目其他紧急需求，但是又不想提交当前的修改内容，这个时候可以使用贮藏功能，把修改的内容贮藏起来，然后切换到其它的分支处理紧急任务，处理完后再切换到之前的功能分支，把贮藏的内容重新提取出来，继续开发。      
如果试图在为提交当前分支的修改内容是就切换分支去处理其它任务，会报一下错误
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3703236ebab6?w=1331&h=253&f=png&s=27834">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3703236ebab6?w=1331&h=253&f=png&s=27834)</a>         
所以需要先把修改内容贮藏起来
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e372eb537fd19?w=1337&h=540&f=png&s=141333">![](https://user-gold-cdn.xitu.io/2018/12/25/167e372eb537fd19?w=1337&h=540&f=png&s=141333)</a>      
贮藏成功后就会在贮藏列表看到刚刚贮藏的内容      
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3741cd3a7aa1?w=1362&h=597&f=png&s=171231">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3741cd3a7aa1?w=1362&h=597&f=png&s=171231)</a>      
如果开发完其它任务后，切换到之前的功能分支，只需要把之前贮藏的内容提取出来就可以继续开发，提取后最好同时删除这次贮藏        
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3777ae6d4a50?w=1354&h=530&f=png&s=186286">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3777ae6d4a50?w=1354&h=530&f=png&s=186286)</a>      
应用成功后就会在图谱上看到之前的未提交更改，同时之前的贮藏也会贮藏列表移除      
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e37916cacb003?w=1345&h=496&f=png&s=130965">![](https://user-gold-cdn.xitu.io/2018/12/25/167e37916cacb003?w=1345&h=496&f=png&s=130965)</a>