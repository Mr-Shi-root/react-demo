import React, { useState } from "react";
import ReactDOM from "react-dom/client"

// 函数组件实现类似vue中的插槽，通过更小的函数组件，去组装成通用组件。

function Index(props)  {            
    return (   
        <div>
          {props.left}
          {props.right}
        </div>
    )
}

function Left() {
  return (
      <div>left</div>    
  )
}
function Right() {
  return (
      <div>right</div>    
  )
}


export default function App() {

  return (
    <div>
      {/* <Index item={'item'}>
        <div>123</div> 
        <div>123</div>  
        <div>123</div> 
        <div>123</div> 
        <div>123</div> 
      </Index>  */}
      <Index
        left={
          <Left></Left>
        }
        right={
          <Right></Right>
        }
      ></Index>
      <h2>我是react</h2>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)

