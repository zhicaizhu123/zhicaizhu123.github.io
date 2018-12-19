# SourceTree使用教程

### 准备工作
- Git版本管理工具 ([下载地址](https://git-scm.com/downloads))
- 安装SourceTree ([下载地址](https://www.sourcetreeapp.com/))

### 创建仓库
可以通过 **SSH** 或 **HTTPS** 两种方式克隆代码
![](https://user-gold-cdn.xitu.io/2018/12/18/167bf515333f77c2?w=779&h=172&f=png&s=13373)
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
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167bf308a2712f01?w=680&h=600&f=png&s=40955)
    添加 id_rsa.pub 文件内容到 git 服务器:  
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167bf4dbee2645e5?w=1330&h=628&f=png&s=48561)
    
#### 开始克隆（SSH/HTTPS）  
如果没有添加用户信息的，需要通过 “工具 -> 选项 -> 验证”     
![](https://user-gold-cdn.xitu.io/2018/12/18/167bf5e96562fda3?w=676&h=201&f=png&s=13915)
使用快捷键 `CTRL+N` 或 “文件 -> 克隆/新建” 进入以下界面，填写项目信息，克隆远程项目到本地      
![](https://user-gold-cdn.xitu.io/2018/12/18/167bf20d629510cb?w=658&h=536&f=png&s=15992)

### 工具导航栏

![](https://user-gold-cdn.xitu.io/2018/12/18/167c014fcb8e7924?w=591&h=58&f=png&s=5184)
- 提交 -> git commit ...
- 拉取 -> git pull ...
- 推送 -> git push ...
- 获取 -> git fetch ...
- 分支 -> git checkout -b xxx（创建分支同时切换到该分支）
- 合并 -> git merge ...
- 贮藏 -> git stash ...
- 丢弃 -> git reset ...
- 标签 -> git tag ...

### 检出/创建分支
针对广研的实际情况，通常项目是以下几种分支类型：
- master 主分支,稳定的版本；  
- pre 预发布分支；
- test 测试环境分支；
- feature 功能分支，日常功能开发分支，名称命名规则：日期+功能版本，例如：20181001-crm-2.3；  
    如果自测没有问题可以，可以合并到test分支，如果test分支测试没有问题，可以合并到pre分支并打tag，如果pre测试验收后，收到测试小伙伴的上线通知邮件后，可以合并到master主分支并打tag；
- fix分支,线上紧急bug，从master创建fix分支,修复测试通过后,合并到master主分支。

首次开发项目，从远程获取分支：      
![](https://user-gold-cdn.xitu.io/2018/12/18/167bffdbf5a6474c?w=253&h=353&f=png&s=11673)    
检出为本地分支：            
![](https://user-gold-cdn.xitu.io/2018/12/18/167c002094b63237?w=351&h=402&f=png&s=16617)    
创建个人分支：            
- 双击master，切换到master分支；    
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c00848ec8ca99?w=201&h=275&f=png&s=6685)     
- 拉取master线上最新代码；      
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c00988157211a?w=249&h=344&f=png&s=11971)    
- 从master主分支创建功能分支feature(例如：20181001-crm-2.3)     
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c00ada8ccb3e8?w=449&h=198&f=png&s=14979)    
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c00c7ccdfc8d4?w=599&h=240&f=png&s=12371)    

### 合并分支
**注意：**  
合并分支前，需要拉取先拉取目标分支最新代码到本地分支，例如需要把`20181001-crm-2.3`分支合并到`test`分支，我们需要先拉取`origin/test`的远程库的最新代码，然后才进行合并，确保test和远程库的最新代码保持同步   
![](https://user-gold-cdn.xitu.io/2018/12/18/167c034895b8343d?w=312&h=399&f=png&s=14128)    
![](https://user-gold-cdn.xitu.io/2018/12/18/167c03ad0a29a531?w=396&h=406&f=png&s=19913)    

### 冲突和解决方式
#### 冲突出现原因 
当 git 不知道如何自动合并某个文件的多处改动的时候，就会引发冲突。   
一般出现在多人协作中修改了两个或多个开发者修改了同一行代码（编辑冲突）或者对某份代码的几个部分作出了各自的修改的时候    
#### 解决冲突
- 使用 “我的版本” 或 “他人版本” 来解决    
    这是修复 git 中的合并冲突最简单的方式。右击任意有冲突的文件     
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c054656b746c0?w=537&h=516&f=png&s=22774)    
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c059c9dc1b894?w=301&h=138&f=png&s=5056)     
    选择这种方式解决冲突的情况下，说明你对冲突代码的取舍是明确的。
- 手动编辑方法解决
    这种方式是在你不能确定是否可以丢弃的另一份代码情况下使用，也是 git 中的合并冲突最灵活的方法。   
    打开编辑器，一般编辑器都会显示冲突所在的位置，我们和相关小伙伴商量根据需求修改好冲突代码
    修改前：    
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c05e5fd65b1db?w=599&h=205&f=png&s=16039)
    修改后：    
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c06099b4b0151?w=329&h=60&f=png&s=4330)
    修改完后回到SourceTree，在 “为暂存文件” 区域里选择冲突的文件。拖到上面的 “已暂存文件” 区域里面。或者也可以右击文件，然后选择 “解决冲突 -> 标记为已解决”。   
    - 点击“暂存”按钮    
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c0cadf96fd054?w=855&h=248&f=png&s=10407)    
    - 标志为已解决    
    ![](https://user-gold-cdn.xitu.io/2018/12/18/167c0cb1a481fab3?w=537&h=504&f=png&s=23017)      
- 合并过程中失误解决方式  
    有时候解决冲突，可能误删了一些东西，想恢复到解决冲突之前的状态，有以下解决方式。
    - 重置所有文件：
        只要没有提交，就可以从顶部菜单中选择 “丢弃”。然后就可以重新开始分支合并操作，一切都将从头来过。     
        ![](https://user-gold-cdn.xitu.io/2018/12/18/167c0cb8e39186a3?w=492&h=193&f=png&s=8966)
    - 重置单个文件：
        右击文件，然后选择 “解决冲突 -> 重新合并”

### 推送代码到远程库
时刻谨记 **“先拉取，后提交”**    
虽然SourceTree中不拉取，直接推送，工具会检测如果代码冲突会让你修改冲突之后再提交，但是这样的习惯不好。
- 拉取 : 把项目中这个分支的远程仓库代码拉到本地合并处理（如果有冲突需要把冲突解决）。
- 推送 : 把本地这个分支合并后的代码，推送到远程仓库。   

### 上预发布和生产环境需要打tag