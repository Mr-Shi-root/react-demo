import React, { useState } from "react";
import ReactDOM from "react-dom"
import NoClient from "react-dom/client";

console.log('无client：', ReactDOM);
console.log('有client：', NoClient);

// createPortal 可以把你想渲染的任何组件，插入到任何地方，但是实际还是在根结点下
// 使用场景：比较适用于一些页面通用的弹窗，而且层级比较高，通用的loading效果等

// 组件本身在根结点下，但是插入到某些组件里，Context属性，不会因为本身在根结点而发生变化。
// 所以，这种写法，不会影响组件嵌套的事件冒泡
// 通过 Portal创建的组件，他的事件冒泡顺序还是会遵循react组件的父子间关系


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.dom = document.querySelector("#root")
  }

  render() {
    return ReactDOM.createPortal(
      <h1>hello home</h1>,
      this.dom
    )
  }

}

class Index extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
    }

  }


  render() {

    return (
      <div>
        <h1>hello world</h1>
        <Home></Home> 
      </div>
      
    )

  }


}

export default function App() {

  return (
    <div>
      <Index></Index>
      <h2>我是react</h2>
    </div>
  )
}

const root = NoClient.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)

