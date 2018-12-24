(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(t,s,r){"use strict";r.r(s);var e=r(0),i=Object(e.a)({},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("ul",[r("li",[t._v("Git版本管理工具 ("),r("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("安装SourceTree ("),r("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("针对广研的实际情况，通常项目是以下几种分支类型：")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"sourcetree使用教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sourcetree使用教程","aria-hidden":"true"}},[this._v("#")]),this._v(" SourceTree使用教程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[this._v("#")]),this._v(" 准备工作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"创建仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建仓库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可以通过 "),s("strong",[this._v("SSH")]),this._v(" 或 "),s("strong",[this._v("HTTPS")]),this._v(" 两种方式克隆代码\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf515333f77c2?w=779&h=172&f=png&s=13373",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"ssh方式提前配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh方式提前配置","aria-hidden":"true"}},[this._v("#")]),this._v(" SSH方式提前配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("使用 git 客户端生成私钥公钥 id_rsa、id_rsa.pub："),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('// 1. 设置Git的user name和email\ngit config --global user.name "xxx"\ngit config --global user.email "xxx.mail@xxx.com"\n\n// 2. 生成 SSH 密钥, 按3个回车，密码为空\nssh-keygen -t rsa -C "username@tzdtz.com"\n\n')])])])]),this._v(" "),s("li",[this._v("使用SourceTree, 通过 “工具 -> 选项 -> 一般” 进入设置界面"),s("br"),this._v("\n添加密钥：\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf308a2712f01?w=680&h=600&f=png&s=40955",alt:""}}),this._v("\n添加 id_rsa.pub 文件内容到 git 服务器:"),s("br"),this._v(" "),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf4dbee2645e5?w=1330&h=628&f=png&s=48561",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"开始克隆（ssh-https）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始克隆（ssh-https）","aria-hidden":"true"}},[this._v("#")]),this._v(" 开始克隆（SSH/HTTPS）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果没有添加用户信息的，需要通过 “工具 -> 选项 -> 验证”"),s("br"),this._v(" "),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf5e96562fda3?w=676&h=201&f=png&s=13915",alt:""}}),this._v("\n使用快捷键 "),s("code",[this._v("CTRL+N")]),this._v(" 或 “文件 -> 克隆/新建” 进入以下界面，填写项目信息，克隆远程项目到本地"),s("br"),this._v(" "),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf20d629510cb?w=658&h=536&f=png&s=15992",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"工具导航栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具导航栏","aria-hidden":"true"}},[this._v("#")]),this._v(" 工具导航栏")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c014fcb8e7924?w=591&h=58&f=png&s=5184",alt:""}})])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ul",[r("li",[t._v("提交 -> git commit ...")]),t._v(" "),r("li",[t._v("拉取 -> git pull ...")]),t._v(" "),r("li",[t._v("推送 -> git push ...")]),t._v(" "),r("li",[t._v("获取 -> git fetch ...")]),t._v(" "),r("li",[t._v("分支 -> git checkout -b xxx（创建分支同时切换到该分支）")]),t._v(" "),r("li",[t._v("合并 -> git merge ...")]),t._v(" "),r("li",[t._v("贮藏 -> git stash ...")]),t._v(" "),r("li",[t._v("丢弃 -> git reset ...")]),t._v(" "),r("li",[t._v("标签 -> git tag ...")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"检出-创建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检出-创建分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 检出/创建分支")])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ul",[r("li",[t._v("master 主分支,稳定的版本；")]),t._v(" "),r("li",[t._v("pre 预发布分支；")]),t._v(" "),r("li",[t._v("test 测试环境分支；")]),t._v(" "),r("li",[t._v("feature 功能分支，日常功能开发分支，名称命名规则：日期+功能版本，例如：20181001-crm-2.3；"),r("br"),t._v("\n如果自测没有问题可以，可以合并到test分支，如果test分支测试没有问题，可以合并到pre分支并打tag，如果pre测试验收后，收到测试小伙伴的上线通知邮件后，可以合并到master主分支并打tag；")]),t._v(" "),r("li",[t._v("fix分支,线上紧急bug，从master创建fix分支,修复测试通过后,合并到master主分支。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首次开发项目，从远程获取分支："),s("br"),this._v(" "),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bffdbf5a6474c?w=253&h=353&f=png&s=11673",alt:""}}),s("br"),this._v("\n检出为本地分支："),s("br"),this._v(" "),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c002094b63237?w=351&h=402&f=png&s=16617",alt:""}}),s("br"),this._v("\n创建个人分支：")])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ul",[r("li",[t._v("双击master，切换到master分支；"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c00848ec8ca99?w=201&h=275&f=png&s=6685",alt:""}})]),t._v(" "),r("li",[t._v("拉取master线上最新代码；"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c00988157211a?w=249&h=344&f=png&s=11971",alt:""}})]),t._v(" "),r("li",[t._v("从master主分支创建功能分支feature(例如：20181001-crm-2.3)"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c00ada8ccb3e8?w=449&h=198&f=png&s=14979",alt:""}}),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c00c7ccdfc8d4?w=599&h=240&f=png&s=12371",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 合并分支")])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("p",[r("strong",[t._v("注意：")]),r("br"),t._v("\n合并分支前，需要拉取先拉取目标分支最新代码到本地分支，例如需要把"),r("code",[t._v("20181001-crm-2.3")]),t._v("分支合并到"),r("code",[t._v("test")]),t._v("分支，我们需要先拉取"),r("code",[t._v("origin/test")]),t._v("的远程库的最新代码，然后才进行合并，确保test和远程库的最新代码保持同步"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c034895b8343d?w=312&h=399&f=png&s=14128",alt:""}}),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c03ad0a29a531?w=396&h=406&f=png&s=19913",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"冲突和解决方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冲突和解决方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 冲突和解决方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"冲突出现原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冲突出现原因","aria-hidden":"true"}},[this._v("#")]),this._v(" 冲突出现原因")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当 git 不知道如何自动合并某个文件的多处改动的时候，就会引发冲突。"),s("br"),this._v("\n一般出现在多人协作中修改了两个或多个开发者修改了同一行代码（编辑冲突）或者对某份代码的几个部分作出了各自的修改的时候")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"解决冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决冲突")])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ul",[r("li",[t._v("使用 “我的版本” 或 “他人版本” 来解决"),r("br"),t._v("\n这是修复 git 中的合并冲突最简单的方式。右击任意有冲突的文件"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c054656b746c0?w=537&h=516&f=png&s=22774",alt:""}}),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c059c9dc1b894?w=301&h=138&f=png&s=5056",alt:""}}),r("br"),t._v("\n选择这种方式解决冲突的情况下，说明你对冲突代码的取舍是明确的。")]),t._v(" "),r("li",[t._v("手动编辑方法解决\n这种方式是在你不能确定是否可以丢弃的另一份代码情况下使用，也是 git 中的合并冲突最灵活的方法。"),r("br"),t._v("\n打开编辑器，一般编辑器都会显示冲突所在的位置，我们和相关小伙伴商量根据需求修改好冲突代码\n修改前："),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c05e5fd65b1db?w=599&h=205&f=png&s=16039",alt:""}}),t._v("\n修改后："),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c06099b4b0151?w=329&h=60&f=png&s=4330",alt:""}}),t._v("\n修改完后回到SourceTree，在 “为暂存文件” 区域里选择冲突的文件。拖到上面的 “已暂存文件” 区域里面。或者也可以右击文件，然后选择 “解决冲突 -> 标记为已解决”。\n"),r("ul",[r("li",[t._v("点击“暂存”按钮"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c0cadf96fd054?w=855&h=248&f=png&s=10407",alt:""}})]),t._v(" "),r("li",[t._v("标志为已解决"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c0cb1a481fab3?w=537&h=504&f=png&s=23017",alt:""}})])])]),t._v(" "),r("li",[t._v("合并过程中失误解决方式"),r("br"),t._v("\n有时候解决冲突，可能误删了一些东西，想恢复到解决冲突之前的状态，有以下解决方式。\n"),r("ul",[r("li",[t._v("重置所有文件：\n只要没有提交，就可以从顶部菜单中选择 “丢弃”。然后就可以重新开始分支合并操作，一切都将从头来过。"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c0cb8e39186a3?w=492&h=193&f=png&s=8966",alt:""}})]),t._v(" "),r("li",[t._v("重置单个文件：\n右击文件，然后选择 “解决冲突 -> 重新合并”")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"推送代码到远程库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送代码到远程库","aria-hidden":"true"}},[this._v("#")]),this._v(" 推送代码到远程库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("时刻谨记 "),s("strong",[this._v("“先拉取，后提交”")]),s("br"),this._v("\n虽然SourceTree中不拉取，直接推送，工具会检测如果代码冲突会让你修改冲突之后再提交，但是这样的习惯不好。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("拉取 : 把项目中这个分支的远程仓库代码拉到本地合并处理（如果有冲突需要把冲突解决）。")]),this._v(" "),s("li",[this._v("推送 : 把本地这个分支合并后的代码，推送到远程仓库。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"上预发布和生产环境需要打tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上预发布和生产环境需要打tag","aria-hidden":"true"}},[this._v("#")]),this._v(" 上预发布和生产环境需要打tag")])}],!1,null,null,null);i.options.__file="README.md";s.default=i.exports}}]);