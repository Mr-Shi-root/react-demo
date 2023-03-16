import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client"

// Hooks
// useState useEffect 

// hook不能在class组件里使用

// 学习react，就是学习生命

function Example() {
  // 声明一个叫 “count” 的 state 变量

  // useState
  // count就是渲染中需要的数据
  // setCount就是修改数据的方法
  // useState的返回值就是一个数组

  // useEffect
  // 给函数组件增加操作副作用的能力
  // 副作用：在组件中执行 请求，订阅，或者手动修改dom的，我们统一把这些操作称为副作用
  // 跟class组件中 的componentDidCatch,componentWillUnmount,componentDidUpdate具有相同的用途
  // useEffect 在render的时候执行两次 （面试考点🌟🌟🌟🌟🌟 ）
  // 原因：仅在生产模式+严格模式下才会触发，目的是模拟立即卸载组件和重新挂载组件。为了帮助开发者提前发现重复挂载造成的bug的代码。也是为了fiber做铺垫
  // react设置严格模式，React.StrictMode包裹根组件。
  // React18版本加入了分片更新，fiber架构
  // 目的是为了 useEffect 执行多次，不会影响我们最终 渲染的结果。所以执行的目的，故意设置在生产模式。
  // 




  const [count, setCount] = useState(0)

  const [name, setName] = useState('aaa')

  let timer = null

  
  useEffect(() => {
    console.log('useEffect执行');
    document.title = `You click ${ count } times`
    timer = setInterval(() => {
      setCount(count + 1)
      console.log(count);
    }, 2000)
    return () => {
      console.log('useEffect执行卸载了');
      // 可以试下，不加这个的效果
      clearInterval(timer)
    }
  })

  const handleClick = () =>  {
    setCount(count + 1)
  }


  return (
    <div>
      <p>You click { count } times</p>
      <button onClick={handleClick}>
        Click me
      </button> 
    </div>
  )
}

export default function App() {

  return (
    <div>
      <Example></Example> 
      <h2>我是react</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

