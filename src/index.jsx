import React, { useState } from "react";
import ReactDOM from "react-dom/client"

/**
 * Ref 的 createRef
 * React.createRef方法，参数是 props 和 ref ，能够返回一个组件
 * 
 * 高阶组件就是接受一个组件作为参数并返回一个新组件（功能增强的组件）的函数。这里需要注意高阶组件是一个函数，并不是组件，这一点一定要注意。
 * 
 * 使用场景：高阶组件（Hoc）中，会使用
 * 
 */

function logProps(Component) {

  console.log('logProps', Component);
  const a = {
    name: '章三',
    age: 23
  }
  class LogProps extends React.Component {
    render() {
      const {forwardRef, ...rest}  = this.props
      return (
        <Component ref={forwardRef} {...rest} {...a}></Component>
      )
    }
  }

  const resCom = React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardRef={ref}></LogProps>
  })

  console.log('resCom', resCom);

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardRef={ref}></LogProps>
  })
}

class TestComponent extends React.Component {
  render() {
    return(
      <h1>hello world{this.props.age}</h1>
    )
  }
}

const Child = logProps(TestComponent)
console.log('Child:',Child);
console.log('TestComponent:',TestComponent);

class Index extends React.Component {
    constructor(props) {
        super(props)

        this.child_ref = React.createRef()
    }

    componentDidMount() {
      console.log('child_ref', this.child_ref);
    }


    render() {
        return (
            <div>
              <Child ref={this.child_ref}></Child>
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

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)

