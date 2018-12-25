# SourceTree使用教程

## 准备工作
- Git版本管理工具 ([下载地址](https://git-scm.com/downloads))       
- 安装SourceTree ([下载地址](https://www.sourcetreeapp.com/))       

## SouuceTree功能区
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e2df3f0ccae9b?w=1352&h=725&f=png&s=212435">![](https://user-gold-cdn.xitu.io/2018/12/25/167e2df3f0ccae9b?w=1352&h=725&f=png&s=212435)</a>           

<!--## 工具导航栏-->
<!--<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e2e267287ed96?w=830&h=53&f=png&s=8472">![](https://user-gold-cdn.xitu.io/2018/12/25/167e2e267287ed96?w=830&h=53&f=png&s=8472)</a>-->
<!--- 提交 -> git commit ...-->
<!--- 拉取 -> git pull ...-->
<!--- 推送 -> git push ...-->
<!--- 获取 -> git fetch ...-->
<!--- 分支 -> git checkout -b xxx（创建分支同时切换到该分支）-->
<!--- 合并 -> git merge ...-->
<!--- 贮藏 -> git stash ...-->
<!--- 丢弃 -> git reset .../git checkout ...-->
<!--- 标签 -> git tag ...-->

## 从远程服务器上克隆项目
可以通过 **SSH** 或 **HTTPS** 两种方式克隆代码
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/18/167bf515333f77c2?w=779&h=172&f=png&s=13373">![](https://user-gold-cdn.xitu.io/2018/12/18/167bf515333f77c2?w=779&h=172&f=png&s=13373)</a>        
#### SSH方式提前配置
- 使用 git 客户端生成私钥公钥 id_rsa、id_rsa.pub：
    ```
    // 1. 设置Git的user name和email
    git config --global user.name "xxx"
    git config --global user.email "xxx.mail@xxx.com"
    
    // 2. 生成 SSH 密钥, 按3个回车，密码为空
    ssh-keygen -t rsa -C "username@tzdtz.com"
    ```
- 使用SourceTree, 通过 “工具 -> 选项 -> 一般” 进入设置界面    
    添加密钥：
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/18/167bf308a2712f01?w=680&h=600&f=png&s=40955">![](https://user-gold-cdn.xitu.io/2018/12/18/167bf308a2712f01?w=680&h=600&f=png&s=40955)</a>        
    添加 id_rsa.pub 文件内容到 git 服务器:  
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/18/167bf4dbee2645e5?w=1330&h=628&f=png&s=48561">![](https://user-gold-cdn.xitu.io/2018/12/18/167bf4dbee2645e5?w=1330&h=628&f=png&s=48561)</a>       

#### 开始克隆（SSH/HTTPS）  
如果没有添加用户信息的，需要通过 “工具 -> 选项 -> 验证”     
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/18/167bf5e96562fda3?w=676&h=201&f=png&s=13915">![](https://user-gold-cdn.xitu.io/2018/12/18/167bf5e96562fda3?w=676&h=201&f=png&s=13915)</a>        
使用快捷键 `CTRL+N` 或 “文件 -> 克隆/新建” 进入以下界面，填写项目信息，克隆远程项目到本地      
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/18/167bf20d629510cb?w=658&h=536&f=png&s=15992">![](https://user-gold-cdn.xitu.io/2018/12/18/167bf20d629510cb?w=658&h=536&f=png&s=15992)</a>        


## 检出/创建分支
针对广研的实际情况，通常项目是以下几种分支类型：
- `master` 主分支,稳定的版本；  
- `pre` 预发布分支；
- `test` 测试环境分支；
- `feature` 功能分支，日常功能开发分支，名称命名规则："yyyy-MM-dd_version_X.X"，例如："2018-10-01_version_2.3"；  
    如果自测没有问题可以，可以合并到`test`分支，如果`test`分支测试没有问题，可以合并到`pre`分支并打tag，如果`pre`测试验收后，收到测试小伙伴的上线通知邮件后，可以合并到`master`主分支并打tag；
- `fixbug`分支,线上紧急bug，从`master`创建fixbug分支,修复测试通过后,合并到`master`主分支。

首次开发项目，从远程获取分支：      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e33e3140d9619?w=1351&h=698&f=png&s=169666">![](https://user-gold-cdn.xitu.io/2018/12/25/167e33e3140d9619?w=1351&h=698&f=png&s=169666)</a>      
    检出为本地分支：            
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e33d5b14b23d1?w=1341&h=691&f=png&s=172676">![](https://user-gold-cdn.xitu.io/2018/12/25/167e33d5b14b23d1?w=1341&h=691&f=png&s=172676)</a>          
    如果是远程的环境分支我们一般需要“跟踪远程分支”，方便我们知道远程分支是否已经更新了修改      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e362966d31f55?w=1349&h=540&f=png&s=138954">![](https://user-gold-cdn.xitu.io/2018/12/25/167e362966d31f55?w=1349&h=540&f=png&s=138954)</a>      
    如果有未推送和未拉取的远程更新，在相应的位置会显示条目      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3654005dd6bb?w=1354&h=480&f=png&s=149542">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3654005dd6bb?w=1354&h=480&f=png&s=149542)</a>      
    
创建feature/fixbug分支：            
    1. 双击master，切换到master分支，拉取master线上最新代码；    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3402a7678211?w=1351&h=665&f=png&s=168761">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3402a7678211?w=1351&h=665&f=png&s=168761)</a>      
    2. 从master主分支创建功能分支feature(例如：2018-10-01_version_2.3)     
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e341af21fcbd4?w=1356&h=669&f=png&s=165937">![](https://user-gold-cdn.xitu.io/2018/12/25/167e341af21fcbd4?w=1356&h=669&f=png&s=165937)</a>      

## 修改和提交分支
如果我们在feature/fixbug分支新增/删除文件或者修改文件等时，界面会提示你当前有未提交的修改       
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e34b22069fde4?w=1350&h=691&f=png&s=151670">![](https://user-gold-cdn.xitu.io/2018/12/25/167e34b22069fde4?w=1350&h=691&f=png&s=151670)</a>      
接着我们可以将修改的内容加入暂存区和历史版本    
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e34e797e70784?w=1349&h=677&f=png&s=165437">![](https://user-gold-cdn.xitu.io/2018/12/25/167e34e797e70784?w=1349&h=677&f=png&s=165437)</a>      
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e34f9629556a2?w=1353&h=666&f=png&s=79239">![](https://user-gold-cdn.xitu.io/2018/12/25/167e34f9629556a2?w=1353&h=666&f=png&s=79239)</a>       

## 合并分支
合并分支前，需要拉取先拉取目标分支最新代码到本地分支，例如需要把`2018-10-01_version_2.3`分支合并到`master`分支，我们需要先拉取`master`的远程库的最新代码    
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3fe5bbf6ffb3?w=1206&h=414&f=png&s=97961">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3fe5bbf6ffb3?w=1206&h=414&f=png&s=97961)</a>       
合并分支要到目标分支上去操作，比如我们要把分支`2018-10-01_version_2.3`上的修改合并到`master`分支，那么我们就要到`master`分支上去操作。       
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3274be0a911b?w=1351&h=386&f=png&s=110652">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3274be0a911b?w=1351&h=386&f=png&s=110652)</a>      
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e329a74b43fd8?w=1329&h=574&f=png&s=132538">![](https://user-gold-cdn.xitu.io/2018/12/25/167e329a74b43fd8?w=1329&h=574&f=png&s=132538)</a>      
- 合并过程发生冲突      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e32c369377f1f?w=1342&h=664&f=png&s=161418">![](https://user-gold-cdn.xitu.io/2018/12/25/167e32c369377f1f?w=1342&h=664&f=png&s=161418)</a>      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e32cc75877d87?w=758&h=170&f=png&s=23033">![](https://user-gold-cdn.xitu.io/2018/12/25/167e32cc75877d87?w=758&h=170&f=png&s=23033)</a>        
    处理冲突后，标记为已解决（[解决冲突的方法可以参考](#冲突和解决方式)）      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e32e4190d7987?w=1145&h=565&f=png&s=137236">![](https://user-gold-cdn.xitu.io/2018/12/25/167e32e4190d7987?w=1145&h=565&f=png&s=137236)</a>      
    提交修改        
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e32f613899bfb?w=1360&h=568&f=png&s=136410">![](https://user-gold-cdn.xitu.io/2018/12/25/167e32f613899bfb?w=1360&h=568&f=png&s=136410)</a>      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3300f5a7e481?w=1358&h=665&f=png&s=79670">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3300f5a7e481?w=1358&h=665&f=png&s=79670)</a>       
    提交信息默认为发生冲突的文件路径        
- 合并过程没有冲突      
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e35523b534a83?w=1344&h=692&f=png&s=171991">![](https://user-gold-cdn.xitu.io/2018/12/25/167e35523b534a83?w=1344&h=692&f=png&s=171991)</a>      

## 推送代码到远程库
时刻谨记 **“先拉取，后提交”**    
虽然SourceTree中不拉取，直接推送，工具会检测如果代码冲突会让你修改冲突之后再提交，但是这样的习惯不好。
- 拉取 : 把项目中这个分支的远程仓库代码拉到本地合并处理（如果有冲突需要把冲突解决，解决冲突可以参看[冲突和解决方式](#冲突和解决方式)）。    
- 推送 : 把本地这个分支合并后的代码，推送到远程仓库。   

## 上预发布和生产环境需要打tag
标签名称命名规则： "prefix_YYYY-MM-DD_version_X.X"，例如: "prod_2018-07-12_version_1.0"。prefix可能为prod(生产环境)、pre(预发布环境)、fixbug(紧急bug修复)     
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3f643fdc6b84?w=1036&h=402&f=png&s=95708">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3f643fdc6b84?w=1036&h=402&f=png&s=95708)</a>       

如果没有自动推送到远程库的话，日后可以在标签列表里进行推送      
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3fbb732aec98?w=1017&h=512&f=png&s=105538">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3fbb732aec98?w=1017&h=512&f=png&s=105538)</a>      

## 版本回退
如果开发过程中发现当前已经提交的版本有问题回滚到上一个版本或者指定版本。    
假如当前提交的版本2.0有问题，需要回退到版本1.0
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3d6fb611f1b6?w=1041&h=474&f=png&s=124060">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3d6fb611f1b6?w=1041&h=474&f=png&s=124060)</a>     
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3da60476130d?w=1023&h=336&f=png&s=101160">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3da60476130d?w=1023&h=336&f=png&s=101160)</a>

- 软合并： 暂存区和工作区中的内容不作任何改变，仅仅把HEAD指向`commit`，退到某个版本，只回退了`commit`的信息。
- 混合合并：仅重设暂存区，但是不重设工作区。这个模式是默认模式。回退到某个版本，只保留源码，回退`commit`和`add`信息     
- 强行合并：丢弃所有的暂存区和工作区改动过的工作副本，从`commit`以来在工作区中的任何改变都被丢弃，并把HEAD指向`commit`，彻底回退到某个版本，本地的源码也会变为上一个版本的内容（三思而后行）     

## 冲突和解决方式
#### 冲突出现原因 
当 git 不知道如何自动合并某个文件的多处改动的时候，就会引发冲突。       
一般出现在多人协作中修改了两个或多个开发者修改了同一行代码（编辑冲突）或者对某份代码的几个部分作出了各自的修改的时候 
#### 解决冲突
场景一：两个或多个开发人员修改了同一行代码(merge或者pull（fetch + merge）冲突)
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3868982f1c7c?w=1352&h=598&f=png&s=157669">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3868982f1c7c?w=1352&h=598&f=png&s=157669)</a>      
- 使用 “我的版本” 或 “他人版本” 来解决    
    这是修复 git 中的合并冲突最简单的方式。右击任意有冲突的文件     
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3c5f2bcda53d?w=1046&h=619&f=png&s=141663">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3c5f2bcda53d?w=1046&h=619&f=png&s=141663)</a>
    选择这种方式解决冲突的情况下，说明你对冲突代码的取舍是明确的。
- 手动编辑方法解决
    这种方式是在你不能确定是否可以丢弃的另一份代码情况下使用，也是 git 中的合并冲突最灵活的方法。   
    打开编辑器，一般编辑器都会显示冲突所在的位置，我们和相关小伙伴商量根据需求修改好冲突代码。    
    修改前：    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3c77da6cb319?w=999&h=192&f=png&s=26553">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3c77da6cb319?w=999&h=192&f=png&s=26553)</a>
    修改后：    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3c85f32ddfec?w=914&h=197&f=png&s=20660">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3c85f32ddfec?w=914&h=197&f=png&s=20660)</a>
    修改完后回到SourceTree，在 “未暂存文件” 区域里选择冲突的文件。拖到上面的 “已暂存文件” 区域里面。或者也可以右击文件，然后选择 “解决冲突 -> 标记为已解决”。   
    - 点击“暂存”按钮    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3cb15780c7b5?w=1039&h=546&f=png&s=112640">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3cb15780c7b5?w=1039&h=546&f=png&s=112640)</a>    
    - 标志为已解决    
    <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3c9c0299fc9b?w=1037&h=559&f=png&s=122466">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3c9c0299fc9b?w=1037&h=559&f=png&s=122466)</a>      
- 合并过程中失误解决方式  
    有时候解决冲突，可能误删了一些东西，想恢复到解决冲突之前的状态，有以下解决方式。
    - 重置所有文件：
        只要没有提交，就可以从顶部菜单中选择 “丢弃”。然后就可以重新开始分支合并操作，一切都将从头来过。     
        <a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/18/167c0cb8e39186a3?w=492&h=193&f=png&s=8966">![](https://user-gold-cdn.xitu.io/2018/12/18/167c0cb8e39186a3?w=492&h=193&f=png&s=8966)</a>
    - 重置单个文件：
        右击文件，然后选择 “解决冲突 -> 重新合并”   

## 开发中突发紧急任务处理
如果我们在开发过程中突然接到一个线上bug或者当前项目其他紧急需求，但是我们又不想提交我们当前的修改内容，这个时候我们可以使用贮藏功能，把我们修改的内容贮藏起来，然后切换到其它的分支处理紧急任务，处理完后我们再切换到之前的功能分支，把贮藏的内容重新提取出来，继续开发。      
如果我们试图在为提交当前分支的修改内容是就切换分支去处理其它任务，会报一下错误
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3703236ebab6?w=1331&h=253&f=png&s=27834">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3703236ebab6?w=1331&h=253&f=png&s=27834)</a>         
所以我们需要先把修改内容贮藏起来
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e372eb537fd19?w=1337&h=540&f=png&s=141333">![](https://user-gold-cdn.xitu.io/2018/12/25/167e372eb537fd19?w=1337&h=540&f=png&s=141333)</a>      
贮藏成功后我们就会在贮藏列表看到我们刚刚贮藏的内容      
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3741cd3a7aa1?w=1362&h=597&f=png&s=171231">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3741cd3a7aa1?w=1362&h=597&f=png&s=171231)</a>      
如果我们开发完其它任务后，切换到之前的功能分支，只需要把之前贮藏的内容提取出来就可以继续开发，提取后最好同时删除这次贮藏        
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e3777ae6d4a50?w=1354&h=530&f=png&s=186286">![](https://user-gold-cdn.xitu.io/2018/12/25/167e3777ae6d4a50?w=1354&h=530&f=png&s=186286)</a>      
应用成功后我们就会在图谱上看到我们之前的未提交更改，同时之前的贮藏也会贮藏列表移除      
<a data-fancybox title="" href="https://user-gold-cdn.xitu.io/2018/12/25/167e37916cacb003?w=1345&h=496&f=png&s=130965">![](https://user-gold-cdn.xitu.io/2018/12/25/167e37916cacb003?w=1345&h=496&f=png&s=130965)</a>
