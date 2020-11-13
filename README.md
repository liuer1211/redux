# 练习
    1.redux
    Redux 是 JavaScript 状态容器，提供可预测化的状态管理
    2.react-redux
    实际项目中，需要权衡是直接使用Redux还是用React-Redux。
    React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）
    3.redux-thunk
    Redux store 仅支持同步数据流。使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性。可以将 thunk 看做 store 的 dispatch() 方法的封装器；我们可以使用 thunk action creator 派遣函数或 Promise，而不是返回 action 对象。
