# 破壳学堂小程序开发分享


> **前言**
> 1. 针对在开发小程序开发中遇到的一些问题和相应的解决方法；
> 2. 小程序[API](https://developers.weixin.qq.com/miniprogram/dev/api/)的二次封装和公用功能封装；
> 3. 在开发过程中可以参考[微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/)查阅相关API的使用方式。


## 导航
---
-   [遇到的问题](#qa)
    -   [swiper](#swiper)
    -   [获取用户信息](#getUserInfo)
    -   [原生组件](#nativeComponent)
    -   [textarea](#textarea)
-   [技术分享](#API)
    -   [使用less或sass编写样式](#style)
    -   [微信API异步封装](#wxAPI)
    -   [request封装](#request)
    -   [本地存储封装](#store)
    -   [Component通用方法和属性封装](#component)
    -   [Page通用方法的封装](#page)


## <span id="qa">遇到的问题</span>
---
- ### <span id="swiper">swiper</span>
    - 问题描述：  
        小程序数据量大的时候，`swiper`渲染很慢，特别是在安卓端，滑动卡顿和出现以下怪异现象。
    - 原因：  
        其实程序大部分组件最终还是需要渲染成html，如果数据量大，转换时间比较长。
    - 解决方案：  
        1. 按需动态渲染`swiper-item`的内容，滑动到可视区才渲染当前位置的数据
        2. 在`bindchange`事件里判断`e.detail.source == 'touch'`（用户划动引起swiper变化）,如果是才动态设置current为当前索引，这样就可以避免滑动时出现卡顿和一些奇怪bug的发生

- ### <span id="getUserInfo">获取用户信息</span>
    - 问题描述：
        1. 小程序`button:open-type="getUserInfo"` 中设置了`lang="zh_CN"`，但是获取回来的用户地区信息返回的还是英文
        2. 当用户修改地区信息时，小程序获取不会及时更新，需要4个小时左右才能获取最新地区信息
    - 解决方案：  
        在用户授权用户信息成功回调中调用`wx.getUserInfo({lang:'zh_CN', ....})`

- ### <span id="nativeComponent">原生组件</span>
    - `camera` `canvas` `input` `live-player` `live-pusher` `map` `textarea` `video`
    - 开发注意事项：  
	     **由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：**
		> - 原生组件的层级是最高的，所以页面中的其他组件无论设置 z-index 为多少，都无法盖在原生组件上。
		> - 后插入的原生组件可以覆盖之前的原生组件。
		> - 原生组件还无法在 scroll-view、swiper、picker-view、movable-view 中使用。
		> - 部分CSS样式无法应用于原生组件，例如：
		> - 无法对原生组件设置 CSS 动画
		> - 无法定义原生组件为 position: fixed
		> - 不能在父级节点使用 overflow: hidden 来裁剪原生组件的显示区域
		> - 原生组件的事件监听不能使用 bind:eventname 的写法，只支持 bindeventname。原生组件也不支持 catch 和 capture 的事件绑定方式。
		> - 在iOS下，原生组件暂时不支持触摸相关事件。
		> - 原生组件会遮挡 vConsole 弹出的调试面板
		
		**cover-view 与 cover-image**
		> - 为了解决原生组件层级最高的限制。小程序专门提供了 cover-view 和 cover-image 组件，可以覆盖在部分原生组件上面。这两个组件也是原生组件，但是使用限制与其他原生组件有所不同。

- ### <span id="textarea">textarea</span>
    - 问题描述：  
        在父级元素有设置`overflow`属性、`swiper`、`scroll-view`里面使用`textarea`，页面滚动时`placeholder`输入内容不随`textarea`组件滚动，甚至直接不显示，而且`textarea`层级最高不可以设置
    - 解决方案：  
        1.  设置一个跟`textarea`布局一致的替代元素，与textarea交替展现。当点击替代元素时`textarea`展现，就可以输入内容，当textarea失去焦点时替代元素展现，将输入值赋给替代元素
        2.  以弹出框形式展示`textarea`，隐藏时把值付给到替代元素
        3.  使用`input`组件替代（层级最高）



## <span id="API">技术分享</span>
---
- ### <span id="style">使用less或sass编写样式</span>
    - less  
        Visual Studio Code 编辑器可以安装`Easy WXLESS`扩展，保存即编译
    - sass  
        可以参考[在微信小程序中愉快地使用sass](https://segmentfault.com/a/1190000015807708)     
    **优点：**    
    你懂的~~    
    **缺点：**   
    公用样式编译后在引入的文件中重复使用

- ### <span id="wxAPI">微信API封装</span>   
	使用Promise封装微信API，指定哪些接口是不需要进行异步化的，例如一些同步API，wx.xxxSync()
	``` javascript
	function canPromisify(key) {
	  // 特别指定的wx对象中不进行Promise封装的方法
	  const noPromiseMethods = {
	    clearStorage: 1,
	    hideToast: 1,
	    showNavigationBarLoading: 1,
	    hideNavigationBarLoading: 1,
	    drawCanvas: 1,
	    canvasToTempFilePath: 1,
	    hideKeyboard: 1,
	  }
	  return !(
	    noPromiseMethods[key] ||
	    /^(on|create|stop|pause|close|can)/.test(key) ||
	    /\w+Sync$/.test(key)
	  )
	}
	
	const wxAPI = {}
	Object.keys(wx).forEach((key) => {
	  if ( canPromisify(key) ) {
	    wxAPI[key] = function(obj) {
	      obj = obj || { }
	      return new Promise((resolve, reject) => {
	        obj.success = resolve
	        obj.fail = (res) => {
	          if (res && res.errMsg) {
	            reject( new Error(res.errMsg) )
	          } else {
	            reject(res)
	          }
	        }
	        wx[key](obj)
	      })
	    }
	  } else {
	    wxAPI[key] = function() {
	      return wx[key].apply(wx, arguments)
	    }
	  }
	})
	
	export default wxAPI
	
	```
	
	使用方法：
	``` javascript
	import $wxAPI from 'path/to/wxApi'
	...
	$wxAPI.apiName(params)
	    .then((res) => {})
	    .catch((err) => {})
	...
	```

- ### <span id="request">request封装</span>
	根据不同环境配置后台请求接口：   
	```
	// config.js
	export default {
	  version: 'v1',
	  env: 'prod',
	  apiHost: {
		  prod: 'xxx',
		  test: 'xxx',
		  pre: 'xxx',
		  dev: 'xxx' 
	  }
	}    
	```
	为request添加拦截器，使用Promise封装`wx.request`，在请求出错异常是捕获显示错误信息：
	``` javascript
	// http.js
	import config from 'path/to/config'
	const API_HOST = config.apiHost[config.env]
	
	const Loading = {
	  show() { ... },
	  hide() { ... },
	}
	
	const http = {
	  request: (path, data = {}, requireLogin = true, loading = true, method, header = {}, dataType) => {
	    const token = Store.getSync('token')
	    if (requireLogin && token) {
	      Object.assign(header, { Authorization: token })
	    }
	    if (loading) {
	      Loading.show()
	    }
	    return new Promise((resolve, reject) => {
	      $wxAPI.request({
	        url: API_HOST + path,
	        data,
	        header,
	        method,
	        dataType,
	      }).then(res => {
	        Loading.hide()
	        // 拦截器处理
	        ...
	      }).catch((err) => {
	        Loading.hide()
	        reject(err)
	      })
	    })
	  },
	
	  get: (path, data, requireLogin = true, loading = true, header = {}, dataType) => {
	    return http.request(path, data, requireLogin, loading, 'GET', header, dataType)
	  },
	
	  post: (path, data, requireLogin = true, loading = true, header = {}, dataType) => {
	    Object.assign(header, { "Content-Type": "application/json" })
	    return http.request(path, data, requireLogin, loading, 'POST', header, dataType)
	  },
	}
	
	export default http
	```
	使用方法：
	``` javascript
	import http from 'path/to/http'
	...
	const API = {
	  apiNameRequireLogin: data => http.get('/api/module/url', data),
	  apiName: data => http.get('/api/module/url', data, false),
	}
	...
	API.apiName(params)
	  .then((res) => {})
	  .catch((err) => {})
	...
	```

- ### <span id="store">本地存储封装</span>
	把需要本地存储的都封装进一个对象内，以便单独处理某个key：
	``` javascript
	// store.js
	// 本地存储中的缓存键名
	const STORE_KEY = 'STORE_KEY'
	
	// 缓存对象
	let store
	
	function getStoreSync() {
	  if (!store) {
	    store = wx.getStorageSync(STORE_KEY)
	  }
	  return store || {}
	}
	
	export default {
	  // 清空key的本地存储，没有提供key，则清空所有
	  clearSync: (key) => {
	    store = getStoreSync()
	    if (key) {
	      delete store[key]
	      wx.setStorageSync(STORE_KEY, store)
	    } else {
	      wx.setStorageSync(STORE_KEY, {})  
	    }
	  },
		
	  // 存储key本地存储
	  setSync: (key, val) => {
	    store = getStoreSync()
	    store[key] = val
	    wx.setStorageSync(STORE_KEY, store)
	  },
		
	  // 获取key的本地存储，没有提供key，则获取所有
	  getSync: (key) => {
	    store = getStoreSync()
	    return key ? store[key] : store
	  }
	}
	```
	
	使用方式：
	``` javascript
	import Store from 'path/to/store'
	Store.setSync(key, value)
	Store.getSync(key)
	Store.getSync()
	Store.clearSync(key)
	Store.clearSync()
	```

- ### <span id="component">Component通用方法和属性封装</span>
  使用 **[behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html)** 属性引入一个或者多个behavior      
  例如：    
  ![](https://user-gold-cdn.xitu.io/2018/12/14/167aa7127453651f?w=309&h=501&f=png&s=32459)    
  ``` javascript
  // 单个题目通用方法和属性
  module.exports = Behavior({
    behaviors: [],
    properties: {
      showFooter: {
        type: Boolean,
        value: true,
      },
      showType: {
        type: Boolean,
        value: false,
      },
      index: {
        type: Number,
        value: 1,
      },
      questionInfo: {
        type: Object,
      },
      isResult: {
        type: [String, Number],
        value: 0,
      },
    },
    data: {
      audioContext: null,
      audioList: [],
      selfQuestionInfo: {},
      resultData: null,
    },
    methods: {
      // 下一题
      nextQuestionHandler: function () {
        if (this.data.isLast) {
          this.triggerEvent('submit', { type: 1 })
        } else {
          this.triggerEvent('next')
        }
      },
      
      // 上一题
      prevQuestionHandler: function () {
        this.triggerEvent('prev')
      },
    }
  })

  ```

- ### <span id="page">Page通用方法的封装</span>
    - 使用wxs充当Vue中的filter使用，文档可以参考[WXS](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/)   
    例如 **filter.wxs**：
    ```
    // filter.wxs
    // 截取制定长度文本
    var sliceStringFilter = function(str, maxLen) {
      if (str.length > maxLen) {
        return str.slice(0, maxLen) + '...'
      }
      return str
    }
    
    // 将http转化为https
    function convertHttpToHttps(url) {
      var reg = getRegExp("^(\/\/)|^(http:\/\/)")
      return url.replace(reg, 'https://')
    }
    module.exports = {
      sliceStringFilter: sliceStringFilter,
      convertHttpToHttps: convertHttpToHttps,
    }
    ```
	    使用方法：
	    只需要引用的wxml以wxs引入
    ```
    <wxs src="path/to/filter.wxs" module="filter"></wxs>
    ...
    <!-- 截取制定长度文本 -->
    <view>{{ filter.sliceStringFilter(str, 10) }}</view>
    <!-- 将http转化为https -->
    <image src="{{ filter.convertHttpToHttps(url) }}"><image>
    ...
    ```
    - 获取用户信息和授权手机号码（Promise形式，方便在相应页面做不同的逻辑处理），然后在相应需要授权的页面引入   
    首页和题库首页打卡：    
        ![](https://user-gold-cdn.xitu.io/2018/12/14/167aa793eb0173bb?w=310&h=503&f=png&s=78664)    
        班型详情分享：    
        ![](https://user-gold-cdn.xitu.io/2018/12/14/167aa7ad8fa15da3?w=313&h=502&f=png&s=52403)    
        获取用户头像信息：  
        ![](https://user-gold-cdn.xitu.io/2018/12/14/167aa7c7afab14d0?w=313&h=503&f=png&s=30260)    
        选课：  
        ![](https://user-gold-cdn.xitu.io/2018/12/14/167aa7cea2ad29bb?w=313&h=503&f=png&s=38361)    
        ```
        // 授权获取用户信息回调
        export function getUserInfoHandler(res) {
          const userInfo = Store.getSync('userInfo') || {}
          return new Promise((resolve, reject) => {
            // 获取用户中文信息
            $wxAPI.getUserInfo({
              lang: 'zh_CN',
            })
              .then((res) => {
                API.authUserInfo(res.userInfo)
                  .then((res) => {
                    Store.setSync('userInfo', { ...userInfo, ...res.data, isAuth: 1 })
                    return resolve({ ...userInfo, ...res.data, isAuth: 1 })
                  })
                  .catch((err) => {
                    return reject(err)
                  })
              })
          })
        }
        
        function authPhoneInfoHandler(userInfo, params, resolve, reject) {
          if (Store.getSync('promoter')) {
            params.promoter = Store.getSync('promoter')
          }
          API.authPhoneInfo(params)
            .then((res) => {
              if (res.status == 1) {
                return reject('解密失败，需要重新登录')
              }
              const { token, sessionKey, ...data } = res.data
              Store.setSync('token', token)
              Store.setSync('sessionKey', sessionKey)
              Store.setSync('userInfo', { ...userInfo, ...data })
              return resolve({
                token,
                userInfo: { ...userInfo, ...data }
              })
            })
            .catch((err) => {
              Store.clearSync('sessionKey')
              return reject(err)
            })
        }
        
        // 授权手机号码回调
        export function getPhoneNumberHandler(res) {
          const userInfo = Store.getSync('userInfo') || {}
          const sessionKey = Store.getSync('sessionKey')
          const { encryptedData, iv } = res.detail
          return new Promise((resolve, reject) => {
            if (!sessionKey) {
              getCode()
                .then((code) => {
                  const params = { encryptedData, iv, code, sessionKey: '' }
                  authPhoneInfoHandler(userInfo, params, resolve, reject)
                })
        
            } else {
              $wxAPI.checkSession()
                .then((res) => { // 未过期
                  const params = { encryptedData, iv, code: '', sessionKey }
                  authPhoneInfoHandler(userInfo, params, resolve, reject)
                })
                .catch(() => { // 过期
                  getCode()
                    .then((code) => {
                      const params = { encryptedData, iv, code, sessionKey }
                      authPhoneInfoHandler(userInfo, params, resolve, reject)
                    })
                })
            }
          })
        }
        ```
    
    - 多页面需要执行的方法抽离出来  
        合并对象，若有同名方法，则先执行页面扩展对象的方法，最后执行目标页面的方法
        ``` javascript
        // utils/index.js
        /**
         * 扩展页面（若有同名方法，则先执行页面扩展对象的，最后执行目标页面的）
         * @method extendPage
         * @param {Object} target 目标页面
         * @param {Object*} [source] 页面扩展对象
         * @return {Any} 目标页面
         */
        export function extendPage(target) {
          if (target == null) { throw new Error('target cannot be null') }
          let i = 0, len = arguments.length, src
          while (++i < len) {
            src = arguments[i]
            Object.keys(src).forEach(function (key) {
              let srcMember = src[key], targetMember = target[key]
              if (typeof srcMember === 'function' && typeof targetMember === 'function') {
                target[key] = function () {
                  let t = this,
                    args = arguments,
                    result = srcMember.apply(t, args)
        
                  if (result === false) {
                    return result
                  } else if (result != null && typeof result.then === 'function') {
                    return result.then(function (value) {
                      return value === false ? value : targetMember.apply(t, args)
                    });
                  } else {
                    return targetMember.apply(t, args)
                  }
                };
              } else if (targetMember == null) {
                target[key] = srcMember
              }
            })
          }
        
          return target
        }
	    ```
        
        定义通用方法，例如：
       ```
        // utils/perm.js
        // 存储邀请人ID
        function checkParams(options) {
          if (options.scene) {
            let scene = decodeURIComponent(options.scene)
            let search = scene.split('&')
            let query = {}
            for (let i = 0, len = search.length; i < len; i++) {
              let pair = search[i].split('=')
              query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
            if (query.p && !Store.getSync('promoter')) {
              const base64 = new Base64()
              Store.setSync('promoter', base64.decode(query.p))
            }
          }
          if (options && options.promoter && !Store.getSync('promoter')) {
            Store.setSync('promoter', options.promoter)
          }
        }
        
        // 是否支持支持自定义头部
        export function isSupportCustom(vm) {
          vm.setData({
            isSupportCustom: compareVersion(app.globalData.systemInfo.version, '6.6.0') >= 0 ? 1 : 0
          })
        }
        
        export const entryPage = {
         onLoad: function (options) {
           checkParams(options) // 获取推广人信息
           isSupportCustom(this) // 判断是否支持自定义头部
         }
        }
       ```
        
        使用方法：
       ```
       import { extendPage } from 'path/to/utils/index'
       import { entryPage } from 'path/to/utils/prem'
       Page(extendPage({
           ....
       }, entryPage))
       ```


