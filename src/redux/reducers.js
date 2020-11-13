/*
根据老的state和指定action, 处理返回一个新的state
 */
import {INCREMENT} from './action-types' // 可以看是一个常量，用来表示 某个方法名，更清晰

export function counter(state = 0, action) { // 返回值
    console.log(state,action) // state = 0,1,2,3...; action={number: 1,type: "increment"}
    switch (action.type) {
      case INCREMENT: // 如果调用的是这个方法
        return state + action.number // 旧数据+新数据
      case "xiangjian": // 如果调用的是这个方法
        return state - action.number // 旧数据+新数据
      default:
          return state
    }
}
