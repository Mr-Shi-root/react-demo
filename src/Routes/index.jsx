import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import App from './Routes'

/**
 * 
 * store = React.createStore(reducer, applyMiddleware(...middleware))
 * 
 * reducer：状态管理器，纯函数，接受action去改变state, actions里不同的type会有不同的处理方式
 * action对象：有type和payload两个对象，type是方法类型，payload是参数
 * 
 * combineReducers:整合所有的reducer，使其变成一个rootReducer
 * 
 * createStore: 创建一个store对象，里面是各种各样的方法，
 * getState dispatch subscribe（发布订阅，即dispatch之后执行） replace... 
 * 
 * applyMiddleware(...middleware) 中间件
 * 对dispatch进行重新处理
 * 
 * compose：先后执行函数，顺序是从右往左
 * 
 * 例子：
 * const add = x => return x + 10
 * const multiply = x => return x * 10
 * let func = compose(multiply, add)
 * func(1) // ( 1 + 10 ) * 10 = 110 
 * 
 * compose的源码中应用到了 reduceRight函数
 * reduce函数 reduceRight函数
 * 
 * 应用：
 * let combineFunc = compose(multiply, add) // 先加后乘
 * combineFunc(10)
 * const compose = function() {
        let arr = [].slice.apply(arguments);
        console.log(arr);
        return (x) => {
            console.log(x, arr);
            return arr.reduceRight((res, cb) => cb(res), x)
        }
    }
 * 
 * 
 * 
 * 
 * 
 */

function compose() {
  
}

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<BrowserRouter>
  <App />
</BrowserRouter>)

