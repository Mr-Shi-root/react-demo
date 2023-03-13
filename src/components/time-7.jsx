import React, { useState } from "react";
import ReactDOM from "react-dom/client"

// 错误边界组件
// 错误边界组件，可以捕捉到所有的字节点发生的错误，除了文档中提到的四种情况
// 异步，自身的错误，事件处理，服务器渲染
// 可以整个项目放一个，放在最外层！或者每一个页面放一个


class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      throw "index错误"
        return (
            <div>
              <IndexChild></IndexChild>
            </div>
        )
    }
}

class IndexChild extends React.Component {

  render() {
    throw "indexChild错误"
    return (
      <div>我是react</div>
    )
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  } 

  // 类似18增加的getDerivedStateFromProps 返回的对象，会合并到state里
  // 只能捕获子组件的错误，不能捕获自身的错误
  // 发生错误的时候出发，同时触发生命周期钩子 componentDidCatch
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log( errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Something went wrong.</div>
      )
    }
    return this.props.children
  }


}

export default function App() {

  return (
    <div>
      <ErrorBoundary>
        <Index></Index> 
      </ErrorBoundary>
      
      <h2>我是react</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)

