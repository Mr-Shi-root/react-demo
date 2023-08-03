import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client"


/**
 * 
 * 拿到前一次的值
 * 
 */


function Index(params) {

  console.log(1111);

  const [count, setCount] = useState(0)

  const RefCount = useRef()


  useEffect(() => {
    console.log('count:',count);
    RefCount.current = count
  }) 

  const preCount = RefCount.current
  console.log('preCount:',preCount);


  return (
    <>
      <div>update: {count} / before {preCount}</div>
      <div onClick={() => {console.log(2222);setCount(count + 1)}}>小甜瓜</div>
    </>
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


