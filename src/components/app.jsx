/*应用组件*/
import React, {Component} from 'react'
import PropTypes from 'prop-types' // 数据类型校验
import * as actions from '../redux/actions' // redux方法

import './app.css'

export default class App extends Component {
    // 变量
    static propTypes = {
        store: PropTypes.object.isRequired,
    }

    // 相加，本页面的方法
    increment = () => {
        const number = this.refs.numSelect.value * 1
        this.props.store.dispatch(actions.increment(number))
    }

    // 相减，本页面的方法
    xiangjian = () => {
        const number = this.refs.numSelect.value * 1
        this.props.store.dispatch(actions.xiangjian(number))
    }

    // 偶数 + ，本页面的方法
    ouAdd = () => {
        // 页面选择的值
        const number = this.refs.numSelect.value * 1
        // redux 里边的值
        let count = this.props.store.getState()
        // 整除
        if (count % 2 === 0) {
            // 调redux 的action 相加方法
            this.props.store.dispatch(actions.increment(number))
        }
    }

    // 异步延迟 +
    incrementAsync = () => {
        const number = this.refs.numSelect.value * 1
        setTimeout(() => {
            this.props.store.dispatch(actions.increment(number))
        }, 1000)
    }

    // 页面
    render() {
        return (
            <div className='app-main'>
                <p>显示：{this.props.store.getState()}</p>
                <select ref="numSelect" className='select-main'>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                </select>
                <div className='select-div' onClick={this.increment}>+</div>
                <div className='select-div' onClick={this.xiangjian}>-</div>
                <div className='select-div' onClick={this.ouAdd}>偶数 +</div>
                <div className='select-div' onClick={this.incrementAsync}>异步 +</div>
            </div>
        )
    }
}

