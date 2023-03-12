import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Middle from "./text/text-2.jsx";

import {ThemeContext} from './text/common.jsx';



// Context介绍

/**
 * Context.provider
 * context 用来解决 多层嵌套的 props 无限传递的问题
 * 使用方法：
 * 首先创建一个context方法, 然后在子组件外层嵌套 <ThemeContext.Proveder value={xxx}> 然后通过value传递参数
 * 然后在子组件想要使用的时候，引入这个组件，就可以通过this.context来获取参数，class Child.contextType = ThemeContext  
 * 注意：当使用webpack以后，直接引用父组件的ThemeContext对象，会报错，原因是，父组件引用了子组件，子组件引用了父组件的方法，导致了循环依赖
 * 解决方法：把所有context方法，归纳到一个jsx文件里，引用。
 * 
 * 在同一组件内的父子组件，可以通过
 * 1，static contextType = ThemeContext 写在子组件内
 * 2. Class Child.contextType = ThemeContext 写在class同级 // 不支持函数组件， 要想支持，需要用Context.consumer
 * 来让子组件获取fufufufu的props， 通过this.context 来获取值 
 * 
 * 思考：
 * 父组件的value值发生变化，子组件也会重新渲染，这个响应变化的能力是谁提供的？
 * 是因为父组件setState导致render？还是消费者（子组件）响应 生产者（父组件）的变化？ // 后者，不然可能会导致所有中间组件的render
 * 
 * 结果：
 * 中间组件不受影响，（测试方法：中间组件增加生命周期 shouldComponentUpdate，返回false，说明改变了组件不去重新进行render）
 * 
 * 结论
 * 这样的好处就是，在层级嵌套组件中，外层参数变化，只需重新render收尾的组件，中间组件不去render，提升性能。
 * 
 * 
 */



function Index() {

      const colors = {
        blue: '#3339FF',
        yellow: '#E8F909',
        red: '#F32B07'
      }

      console.log(colors);

        return (
            <div>
              <ThemeContext value={colors}>
                <Middle></Middle>
              </ThemeContext>
              
            </div>

        )

}

export default function App() {

  return (
    <div>
      <Index></Index> 
      <h2>我是react</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)

