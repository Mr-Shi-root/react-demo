import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom/client'

/**
 * 
 * useEffect 怎么在初始化的时候，不执行？
 * 通过useRef的current实现
 * 
 * 
 * 为什么不建议用hook代替class？
 * 1.hook目前没有涵盖所有生命周期
 * 2.老得代码可能依赖第三方库，不支持hook
 * 
 * 
 * 
 * 
 * 
 */

function Index() {
  const [count, setCount] = useState(0)

  const Ref = useRef()
  useEffect(() => {

    if (!Ref.current.flag) {
      // 初始化的时候
      Ref.current.flag = true
    } else {
      // 更新的时候
      console.log('update');
    }
    
  })
  return (
    <div>
      <div ref={Ref}>{count}</div>
      <h2 onClick={() => { setCount(count + 1) }}>我是react 文殊到此一游</h2>
    </div>
  )

}

export default function App() {

  return (
    <div>
      <Index></Index>
      <h2>我是react 文殊到此一游</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(document.getElementById('root'))
root.render(<App />)
