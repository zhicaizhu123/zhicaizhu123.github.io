(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{180:function(t,s,e){"use strict";e.r(s);var r=e(0),a=Object(r.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("ul",[e("li",[t._v("Git版本管理工具 ("),e("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[t._v("安装SourceTree ("),e("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("针对广研的实际情况，通常项目是以下几种分支类型：")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"sourcetree使用教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sourcetree使用教程","aria-hidden":"true"}},[this._v("#")]),this._v(" SourceTree使用教程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("SourceTree 是 Windows 和Mac OS X 下免费的 Git 和 Hg 客户端管理工具，同时也是Mercurial和Subversion版本控制系统工具。支持创建、克隆、提交、push、pull 和合并等操作。")]),this._v(" "),s("p",[this._v("SourceTree拥有一个精美简洁的界面，大大简化了开发者与代码库之间的Git操作方式，这对于那些不熟悉Git命令的开发者来说非常实用。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[this._v("#")]),this._v(" 准备工作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"souucetree功能区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#souucetree功能区","aria-hidden":"true"}},[this._v("#")]),this._v(" SouuceTree功能区")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e2df3f0ccae9b?w=1352&h=725&f=png&s=212435"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e2df3f0ccae9b?w=1352&h=725&f=png&s=212435",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"从远程服务器上克隆项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从远程服务器上克隆项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 从远程服务器上克隆项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可以通过 "),s("strong",[this._v("SSH")]),this._v(" 或 "),s("strong",[this._v("HTTPS")]),this._v(" 两种方式克隆代码\n"),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/18/167bf515333f77c2?w=779&h=172&f=png&s=13373"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf515333f77c2?w=779&h=172&f=png&s=13373",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"ssh方式提前配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh方式提前配置","aria-hidden":"true"}},[this._v("#")]),this._v(" SSH方式提前配置")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("使用 git 客户端生成私钥公钥 id_rsa、id_rsa.pub：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("// 1. 设置Git的user name和email\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx@tzdtz.com"')]),t._v("\n\n// 2. 生成 SSH 密钥, 按3个回车，密码为空\nssh-keygen -t rsa -C "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx@tzdtz.com"')]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("使用SourceTree, 通过 “工具 -> 选项 -> 一般” 进入设置界面")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2019/1/5/1681b9942abb291a?w=1364&h=237&f=png&s=69506"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/5/1681b9942abb291a?w=1364&h=237&f=png&s=69506",alt:""}})]),t._v("\n添加密钥：\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/18/167bf308a2712f01?w=680&h=600&f=png&s=40955"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf308a2712f01?w=680&h=600&f=png&s=40955",alt:""}})]),e("br"),t._v("\n添加 id_rsa.pub 文件内容到 git 服务器:"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/18/167bf4dbee2645e5?w=1330&h=628&f=png&s=48561"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf4dbee2645e5?w=1330&h=628&f=png&s=48561",alt:""}})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"开始克隆（ssh-https）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始克隆（ssh-https）","aria-hidden":"true"}},[this._v("#")]),this._v(" 开始克隆（SSH/HTTPS）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果没有添加用户信息的，需要通过 “工具 -> 选项 -> 验证”"),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/18/167bf5e96562fda3?w=676&h=201&f=png&s=13915"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf5e96562fda3?w=676&h=201&f=png&s=13915",alt:""}})]),s("br"),this._v("\n使用快捷键 "),s("code",[this._v("CTRL+N")]),this._v(" 或 “文件 -> 克隆/新建” 进入以下界面，填写项目信息，克隆远程项目到本地"),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/18/167bf20d629510cb?w=658&h=536&f=png&s=15992"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167bf20d629510cb?w=658&h=536&f=png&s=15992",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"检出-创建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检出-创建分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 检出/创建分支")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("master")]),t._v(" 主分支,稳定的版本；")]),t._v(" "),e("li",[e("code",[t._v("pre")]),t._v(" 预发布分支；")]),t._v(" "),e("li",[e("code",[t._v("test")]),t._v(" 测试环境分支；")]),t._v(" "),e("li",[e("code",[t._v("feature")]),t._v(' 功能分支，日常功能开发分支，名称命名规则："yyyy-MM-dd_version_X.X"，例如："2018-10-01_version_2.3"；'),e("br"),t._v("\n如果自测没有问题可以，可以合并到"),e("code",[t._v("test")]),t._v("分支，如果"),e("code",[t._v("test")]),t._v("分支测试没有问题，可以合并到"),e("code",[t._v("pre")]),t._v("分支并打tag，如果"),e("code",[t._v("pre")]),t._v("测试验收后，收到测试小伙伴的上线通知邮件后，可以合并到"),e("code",[t._v("master")]),t._v("主分支并打tag；")]),t._v(" "),e("li",[e("code",[t._v("fixbug")]),t._v("分支,线上紧急bug，从"),e("code",[t._v("master")]),t._v("创建fixbug分支,修复测试通过后,合并到"),e("code",[t._v("master")]),t._v("主分支。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("首次开发项目，从远程获取分支："),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e33e3140d9619?w=1351&h=698&f=png&s=169666"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e33e3140d9619?w=1351&h=698&f=png&s=169666",alt:""}})]),e("br"),t._v("\n检出为本地分支："),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e33d5b14b23d1?w=1341&h=691&f=png&s=172676"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e33d5b14b23d1?w=1341&h=691&f=png&s=172676",alt:""}})]),e("br"),t._v("\n如果是远程的环境分支我们一般需要“跟踪远程分支”，方便我们知道远程分支是否已经更新了修改"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e362966d31f55?w=1349&h=540&f=png&s=138954"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e362966d31f55?w=1349&h=540&f=png&s=138954",alt:""}})]),e("br"),t._v("\n如果有未推送和未拉取的远程更新，在相应的位置会显示条目"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3654005dd6bb?w=1354&h=480&f=png&s=149542"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3654005dd6bb?w=1354&h=480&f=png&s=149542",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("创建feature/fixbug分支："),s("br"),this._v("\n1. 双击master，切换到master分支，拉取master线上最新代码；"),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3402a7678211?w=1351&h=665&f=png&s=168761"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3402a7678211?w=1351&h=665&f=png&s=168761",alt:""}})]),s("br"),this._v("\n2. 从master主分支创建功能分支feature(例如：2018-10-01_version_2.3)"),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e341af21fcbd4?w=1356&h=669&f=png&s=165937"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e341af21fcbd4?w=1356&h=669&f=png&s=165937",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"修改和提交分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改和提交分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改和提交分支")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果我们在feature/fixbug分支新增/删除文件或者修改文件等时，界面会提示你当前有未提交的修改"),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e34b22069fde4?w=1350&h=691&f=png&s=151670"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e34b22069fde4?w=1350&h=691&f=png&s=151670",alt:""}})]),s("br"),this._v("\n接着我们可以将修改的内容加入暂存区和历史版本"),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e34e797e70784?w=1349&h=677&f=png&s=165437"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e34e797e70784?w=1349&h=677&f=png&s=165437",alt:""}})]),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e34f9629556a2?w=1353&h=666&f=png&s=79239"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e34f9629556a2?w=1353&h=666&f=png&s=79239",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 合并分支")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("合并分支前，需要拉取先拉取目标分支最新代码到本地分支，例如需要把"),e("code",[t._v("2018-10-01_version_2.3")]),t._v("分支合并到"),e("code",[t._v("master")]),t._v("分支，我们需要先拉取"),e("code",[t._v("master")]),t._v("的远程库的最新代码"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3fe5bbf6ffb3?w=1206&h=414&f=png&s=97961"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3fe5bbf6ffb3?w=1206&h=414&f=png&s=97961",alt:""}})]),e("br"),t._v("\n合并分支要到目标分支上去操作，比如我们要把分支"),e("code",[t._v("2018-10-01_version_2.3")]),t._v("上的修改合并到"),e("code",[t._v("master")]),t._v("分支，那么我们就要到"),e("code",[t._v("master")]),t._v("分支上去操作。"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3274be0a911b?w=1351&h=386&f=png&s=110652"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3274be0a911b?w=1351&h=386&f=png&s=110652",alt:""}})]),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e329a74b43fd8?w=1329&h=574&f=png&s=132538"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e329a74b43fd8?w=1329&h=574&f=png&s=132538",alt:""}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("合并过程发生冲突"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e32c369377f1f?w=1342&h=664&f=png&s=161418"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e32c369377f1f?w=1342&h=664&f=png&s=161418",alt:""}})]),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e32cc75877d87?w=758&h=170&f=png&s=23033"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e32cc75877d87?w=758&h=170&f=png&s=23033",alt:""}})]),e("br"),t._v("\n处理冲突后，标记为已解决（"),e("a",{attrs:{href:"#%E5%86%B2%E7%AA%81%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E5%BC%8F"}},[t._v("解决冲突的方法可以参考")]),t._v("）"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e32e4190d7987?w=1145&h=565&f=png&s=137236"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e32e4190d7987?w=1145&h=565&f=png&s=137236",alt:""}})]),e("br"),t._v("\n提交修改"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e32f613899bfb?w=1360&h=568&f=png&s=136410"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e32f613899bfb?w=1360&h=568&f=png&s=136410",alt:""}})]),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3300f5a7e481?w=1358&h=665&f=png&s=79670"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3300f5a7e481?w=1358&h=665&f=png&s=79670",alt:""}})]),e("br"),t._v("\n提交信息默认为发生冲突的文件路径")]),t._v(" "),e("li",[t._v("合并过程没有冲突"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e35523b534a83?w=1344&h=692&f=png&s=171991"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e35523b534a83?w=1344&h=692&f=png&s=171991",alt:""}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"推送代码到远程库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送代码到远程库","aria-hidden":"true"}},[this._v("#")]),this._v(" 推送代码到远程库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("时刻谨记 "),s("strong",[this._v("“先拉取，后提交”")]),s("br"),this._v("\n虽然SourceTree中不拉取，直接推送，工具会检测如果代码冲突会让你修改冲突之后再提交，但是这样的习惯不好。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("拉取 : 把项目中这个分支的远程仓库代码拉到本地合并处理（如果有冲突需要把冲突解决，解决冲突可以参看"),s("a",{attrs:{href:"#%E5%86%B2%E7%AA%81%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E5%BC%8F"}},[this._v("冲突和解决方式")]),this._v("）。")]),this._v(" "),s("li",[this._v("推送 : 把本地这个分支合并后的代码，推送到远程仓库。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"上预发布和生产环境需要打tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上预发布和生产环境需要打tag","aria-hidden":"true"}},[this._v("#")]),this._v(" 上预发布和生产环境需要打tag")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('标签名称命名规则： "prefix_YYYY-MM-DD_version_X.X"，例如: "prod_2018-07-12_version_1.0"。prefix可能为prod(生产环境)、pre(预发布环境)、fixbug(紧急bug修复)'),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3f643fdc6b84?w=1036&h=402&f=png&s=95708"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3f643fdc6b84?w=1036&h=402&f=png&s=95708",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果没有自动推送到远程库的话，日后可以在标签列表里进行推送"),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3fbb732aec98?w=1017&h=512&f=png&s=105538"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3fbb732aec98?w=1017&h=512&f=png&s=105538",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"版本回退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本回退","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本回退")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果开发过程中发现当前已经提交的版本有问题回滚到上一个版本或者指定版本。"),s("br"),this._v("\n假如当前提交的版本2.0有问题，需要回退到版本1.0\n"),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3d6fb611f1b6?w=1041&h=474&f=png&s=124060"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3d6fb611f1b6?w=1041&h=474&f=png&s=124060",alt:""}})]),s("br"),this._v(" "),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3da60476130d?w=1023&h=336&f=png&s=101160"}},[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3da60476130d?w=1023&h=336&f=png&s=101160",alt:""}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("软合并： 暂存区和工作区中的内容不作任何改变，仅仅把HEAD指向"),e("code",[t._v("commit")]),t._v("，退到某个版本，只回退了"),e("code",[t._v("commit")]),t._v("的信息。")]),t._v(" "),e("li",[t._v("混合合并：仅重设暂存区，但是不重设工作区。这个模式是默认模式。回退到某个版本，只保留源码，回退"),e("code",[t._v("commit")]),t._v("和"),e("code",[t._v("add")]),t._v("信息")]),t._v(" "),e("li",[t._v("强行合并：丢弃所有的暂存区和工作区改动过的工作副本，从"),e("code",[t._v("commit")]),t._v("以来在工作区中的任何改变都被丢弃，并把HEAD指向"),e("code",[t._v("commit")]),t._v("，彻底回退到某个版本，本地的源码也会变为上一个版本的内容（三思而后行）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"冲突和解决方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冲突和解决方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 冲突和解决方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"冲突出现原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冲突出现原因","aria-hidden":"true"}},[this._v("#")]),this._v(" 冲突出现原因")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当 git 不知道如何自动合并某个文件的多处改动的时候，就会引发冲突。"),s("br"),this._v("\n一般出现在多人协作中修改了两个或多个开发者修改了同一行代码（编辑冲突）或者对某份代码的几个部分作出了各自的修改的时候")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"解决冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决冲突")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("场景一：两个或多个开发人员修改了同一行代码(merge或者pull（fetch + merge）冲突)\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3868982f1c7c?w=1352&h=598&f=png&s=157669"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3868982f1c7c?w=1352&h=598&f=png&s=157669",alt:""}})])]),t._v(" "),e("ul",[e("li",[t._v("使用 “我的版本” 或 “他人版本” 来解决"),e("br"),t._v("\n这是修复 git 中的合并冲突最简单的方式。右击任意有冲突的文件"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3c5f2bcda53d?w=1046&h=619&f=png&s=141663"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3c5f2bcda53d?w=1046&h=619&f=png&s=141663",alt:""}})]),t._v("\n选择这种方式解决冲突的情况下，说明你对冲突代码的取舍是明确的。")]),t._v(" "),e("li",[t._v("手动编辑方法解决\n这种方式是在你不能确定是否可以丢弃的另一份代码情况下使用，也是 git 中的合并冲突最灵活的方法。"),e("br"),t._v("\n打开编辑器，一般编辑器都会显示冲突所在的位置，我们和相关小伙伴商量根据需求修改好冲突代码。"),e("br"),t._v("\n修改前："),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3c77da6cb319?w=999&h=192&f=png&s=26553"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3c77da6cb319?w=999&h=192&f=png&s=26553",alt:""}})]),t._v("\n修改后："),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3c85f32ddfec?w=914&h=197&f=png&s=20660"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3c85f32ddfec?w=914&h=197&f=png&s=20660",alt:""}})]),t._v("\n修改完后回到SourceTree，在 “未暂存文件” 区域里选择冲突的文件。拖到上面的 “已暂存文件” 区域里面。或者也可以右击文件，然后选择 “解决冲突 -> 标记为已解决”。\n"),e("ul",[e("li",[t._v("点击“暂存”按钮"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3cb15780c7b5?w=1039&h=546&f=png&s=112640"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3cb15780c7b5?w=1039&h=546&f=png&s=112640",alt:""}})])]),t._v(" "),e("li",[t._v("标志为已解决"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3c9c0299fc9b?w=1037&h=559&f=png&s=122466"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3c9c0299fc9b?w=1037&h=559&f=png&s=122466",alt:""}})])])])]),t._v(" "),e("li",[t._v("合并过程中失误解决方式"),e("br"),t._v("\n有时候解决冲突，可能误删了一些东西，想恢复到解决冲突之前的状态，有以下解决方式。\n"),e("ul",[e("li",[t._v("重置所有文件：\n只要没有提交，就可以从顶部菜单中选择 “丢弃”。然后就可以重新开始分支合并操作，一切都将从头来过。"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/18/167c0cb8e39186a3?w=492&h=193&f=png&s=8966"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c0cb8e39186a3?w=492&h=193&f=png&s=8966",alt:""}})])]),t._v(" "),e("li",[t._v("重置单个文件：\n右击文件，然后选择 “解决冲突 -> 重新合并”")])])])])]),t._v(" "),e("li",[e("p",[t._v("场景二： 树冲突，文件删除或者重命名，有一个file.js文件，小伙伴A把文件改名为fileA.js，小伙伴B把同一个文件改名为fileB.js，那么小伙伴B将这两个commit合并时，会产生冲突，如图所示")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2019/1/5/1681b7ea1dbcb216?w=1030&h=294&f=png&s=29098"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/5/1681b7ea1dbcb216?w=1030&h=294&f=png&s=29098",alt:""}})]),e("br"),t._v("\n解决办法： 与小伙伴协商取舍，假如最终确定使用小伙伴B的文件名fileB.js")]),t._v(" "),e("ol",[e("li",[t._v("删除file.js 和 fileA.js文件")])]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2019/1/5/1681b821327eb028?w=1146&h=601&f=png&s=110881"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/5/1681b821327eb028?w=1146&h=601&f=png&s=110881",alt:""}})])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("添加fileB.js 到暂缓区")])]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2019/1/5/1681b831b3c4762b?w=1129&h=553&f=png&s=104500"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/5/1681b831b3c4762b?w=1129&h=553&f=png&s=104500",alt:""}})]),e("br"),t._v("\n3. 提交推送")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2019/1/5/1681b847bcb44ef9?w=1350&h=676&f=png&s=81577"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/5/1681b847bcb44ef9?w=1350&h=676&f=png&s=81577",alt:""}})]),t._v("\n4. 小伙伴A拉取最新代码")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开发中突发紧急任务处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发中突发紧急任务处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发中突发紧急任务处理")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("如果我们在开发过程中突然接到一个线上bug或者当前项目其他紧急需求，但是我们又不想提交我们当前的修改内容，这个时候我们可以使用贮藏功能，把我们修改的内容贮藏起来，然后切换到其它的分支处理紧急任务，处理完后我们再切换到之前的功能分支，把贮藏的内容重新提取出来，继续开发。"),e("br"),t._v("\n如果我们试图在为提交当前分支的修改内容是就切换分支去处理其它任务，会报一下错误\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3703236ebab6?w=1331&h=253&f=png&s=27834"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3703236ebab6?w=1331&h=253&f=png&s=27834",alt:""}})]),e("br"),t._v("\n所以我们需要先把修改内容贮藏起来\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e372eb537fd19?w=1337&h=540&f=png&s=141333"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e372eb537fd19?w=1337&h=540&f=png&s=141333",alt:""}})]),e("br"),t._v("\n贮藏成功后我们就会在贮藏列表看到我们刚刚贮藏的内容"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3741cd3a7aa1?w=1362&h=597&f=png&s=171231"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3741cd3a7aa1?w=1362&h=597&f=png&s=171231",alt:""}})]),e("br"),t._v("\n如果我们开发完其它任务后，切换到之前的功能分支，只需要把之前贮藏的内容提取出来就可以继续开发，提取后最好同时删除这次贮藏"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e3777ae6d4a50?w=1354&h=530&f=png&s=186286"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e3777ae6d4a50?w=1354&h=530&f=png&s=186286",alt:""}})]),e("br"),t._v("\n应用成功后我们就会在图谱上看到我们之前的未提交更改，同时之前的贮藏也会贮藏列表移除"),e("br"),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://user-gold-cdn.xitu.io/2018/12/25/167e37916cacb003?w=1345&h=496&f=png&s=130965"}},[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/25/167e37916cacb003?w=1345&h=496&f=png&s=130965",alt:""}})])])}],!1,null,null,null);a.options.__file="README.md";s.default=a.exports}}]);