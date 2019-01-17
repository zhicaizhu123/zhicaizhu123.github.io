# Redux 状态管理器

## Redux 三大原则
- **唯一数据源**    
    Redux只维护一个全局的状态对象，存储在Redux的store中，唯一数据源是编译监控任意时刻的应用状态和调试应用，减少出错的可能性。
- **保持应用状态只读**      
    在任何情况都不能直接修改应用状态，当需要修改时，必须通过发送一个action，描述应用状态如何修改，这在大型项目中保证状态管理有序进行。
- **应用状态的改变通过纯函数完成**       
    action只是表明应用状态如何修改，但是执行修改的是reducer，reducer是一个纯函数，接收到action，reducer不能直接修改应用状态，而是创建一个新的状态对象。

## 主要组成
- **action**     
    action 是Redux中的信息载体，是store唯一的数据来源。     
    如果需要修改应用状态需要发送一个action，action描述应用状态state如何修改，其实action只是一个普通的Javascript对象，对象结构不限制，但是必须由type字段，type一般定义为字符串常量。  
    action一般通过action creator创建，action creator是返回action的函数，如：

    ``` javascript
    function createAction(text) {
        return {
            type: 'ADD_DATA',
            text,
        }
    }
    ```
- **reducer**       
    action是描述应用状态如何改变，reducer根据action做出响应，应该如何修改应用状态state，所以应该在编写reducer前，设计好state。reducer签名如下：

    ``` javascript
    (prevState, action) => newState
    ````
    常见一个最基本的reducer，如：
    
    ``` javascript
    const initState = []
    
    function dataList(state = initState, action) {
        switch(action.type) {
            case 'ADD_DATA':
                return [ ...state, action.text ]
            ...
            default:
                return state
        }
    }
    ```
    
    多个reducer，如下：
    
    ``` javascript
    function dataList(state = [], action) {
        switch(action.type) {
            case 'ADD_DATA':
                return [ ...state, action.text ]
            ...
            default:
                return state
        }
    }
    
    function userInfo(state = {}, action) {
        switch(action.type) {
            case 'UPDATE_USER':
                return { ...state, action.data }
            ...
            default:
                return state
        }
    }
    
    function appReducer(state = {}, action) {
        return {
            dataList: dataList(state.dataList, action),
            userInfo: userInfo(state.userInfo, action)
        }
    }
    ```
    当应用比较复杂时，可以拆分多个reducer到独立的文件。       
    
    **使用Redux的combineReducers来合并多个reducer**
    
    ``` javascript
    import { combineReducers } from 'redux'
    const appReducer = combineReducers({
        dataList,
        userInfo,
    })
    // 等价于
    function appReducer(state = {}, action) {
        return {
            dataList: dataList(state.dataList, action),
            userInfo: userInfo(state.userInfo, action)
        }
    }
    
    // 或
    
    const appReducer = combineReducers({
        dataList: dataListReducer,
        userInfo: userInfoReducer,
    })
    // 等价于
    function appReducer(state = {}, action) {
        return {
            dataList: dataListReducer(state.dataList, action),
            userInfo: dataListReducer(state.userInfo, action)
        }
    }
    
    ```
    CombineReducers传递给每个reducer的state中的属性取决于它的参数对象的key值。
- **store**     
    store主要负责4个工作：  
    - 保存应用状态。
    - 通过getState()访问应用状态。
    - 通过dispatch(action)发送更新状态的视图（action是描述应用状态如何修改）。
    - 通过subscribe(listener)注册监听函数、监听应用状态的改变。
    
    一个Redux应用只有一个store，store保存了唯一数据源，store通过Redux的createStore方法创建，创建时需要传入reducer作为参数。    

    ``` javascript
    import { createStore } from 'redux'
    import appReducer from './reducers'
    
    // 初始化应用状态
    // 对照上面的reducer各自初始化的状态合并就是
    // {
    //      dataList: [],   
    //      userInfo: {},
    // }
    const store = createStore(reducers, initState)
    // 或初始化应用状态
    const store = createStore(reducers)
    ```
    
    创建后可以通过getState()获取当前应用状态。
    
    ``` javascript
    const state = store.getState()
    ```
    
    当需要修改应用状态是可以使用dispatch(action)进行修改。
    
    ``` javascript
    // 定义dataList 的 action
    function createDataListAction(text) {
        return {
            type: 'ADD_DATA',
            text,
        }
    }
    
    // 定义userInfo的action
    function createUserInfoAction(data) {
        return {
            type: 'UPDATE_USER',
            data,
        }
    }
    
    // 发送更改dataList的action
    store.dispatch(createDataListAction('hello world'))
    
    // 发送更改userInfo的action
    const userInfo = {
        id: 1,
        username: 'zzc', 
        email: 'zhicaizhu123@126.com',
    }
    store.dispatch(createUserInfoAction(userInfo)
    ```
    
    当dataList和userInfo这两个reducer根据action完成了应用状态的修改后，可以通过getState()获取更新后的应用状态，为了可以精确的知道应用状态是什么时候更新的，我们可以使用subscribe(listener)来判断应用状态是否已经更新。
    
    ``` javascript
    // 监听应用状态是否更新
    const unsubscribe = store.subscribe(() => {
        console.log(store.getState())
    })
    
    // 当需要取消监听的时候
    unsubscribe()
    ```