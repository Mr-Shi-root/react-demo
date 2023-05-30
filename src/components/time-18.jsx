import React, { useState } from "react";
import ReactDOM from "react-dom/client"

/**
 * 
 * HOC实现 伪代码
 * 
 * 
 */

// with是HOC的标志，在react中，带有with开头的，一般都是高阶组件
function withCommonComp(WrappedComponent, selectData) {

  class App extends React.Component{

    constructor(props) {
      super(props);

      this.state({
        data: 'xxxxx'
      })
    }

    componentDidMount() {
      // 共有函数的运行
    }

    componentWillUnmount() {
      // 共有函数的运行
    }

    handleClick = () => {
      this.setState({
        // 这里的回调函数可以调用外部的变量，在组件内部执行。即 参数1，参数2，都是外界参数
        data: selectData('参数1', '参数2')
      })
    }

    render() {
      return (
        <WrappedComponent data={this.state.data} {...this.props}></WrappedComponent>
      )
    }

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

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)

