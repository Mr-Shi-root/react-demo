import React, { useState } from "react";
import ReactDOM from "react-dom/client"

// Refs
// 会在挂载结束的时候，才会获得Dom元素，在constructor中获取不到

// 通过props去获取子组件的dom元素 Child组件

// forwardsRef 可以返回一个组件 FancyButton组件


// forwardRef返回一个组件
// 注意！！！！
// 这里的箭头函数，不是{}， 而是()
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} >
    {props.children}
  </button>
));


class Child extends React.Component {
  render() {
    return (
      <input ref={this.props.inputRefs} />
    )
  }
}

class Index extends React.Component {

  constructor() {
    super()

    this.dom_ref = React.createRef() 
    // 会打印Dom元素 {current: null}
    console.log('constructor:',this.dom_ref)

    this.fancy_ref = React.createRef()
  }

  componentDidMount() {
    // {current: div}
    console.log('mount:', this.dom_ref);

    console.log('fancy_ref:', this.fancy_ref);

    console.log(this.inputElement);
  }

  focusTextInput = () => {
    this.dom_ref.current.focus()
  }

  render() {
    return (
      <div className="index-context">
        <input type="text" name="" ref={this.dom_ref} id="" />
        <button onClick={this.focusTextInput}>选中input</button>

        {/* 通过props绑定子组件的ref */}
        <Child inputRefs={el => this.inputElement = el}></Child>

        {/* forwardRef用法 */}
        <FancyButton ref={this.fancy_ref}>
          <h1>hello word</h1>
        </FancyButton>
      </div>
    )
  }


}

export default function App() {

  return (
    <div>
      <Index></Index>
      <h2>我是react1</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)

