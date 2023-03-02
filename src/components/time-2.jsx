import React from "react"
import ReactDOM from "react-dom/client"

// Main
// getDerivedStateFromProps React18新引入的生命周期，通过fiber架构解决了嵌套组件render时间长，导致阻塞渲染的问题。

class Child extends React.Component{
  constructor(props) {
    super(props)
  }
  state = {
    text: '123'
  }

  componentDidUpdate() {

  }

  shouldComponentUpdate() {
    return true
  }

  /**
   * componentWillReceiveProps,componentWillUpdateq弃用，和getDerivedStateFromProps冲突
   */

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps');
  // }


  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }


  // 
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  forceUpdate(a,b) {
    console.log('forceUpdate');
  }

  static getDerivedStateFromProps(new_props, state) {
    console.log('getDerivedStateFromProps',new_props, state);
    // 这样会有bug，当state变化时候，也会触发getDerivedStateFromProps
    // 此时，if判断条件也会成立，还是会返回prop值，导致值一直不变
    // 所以解决方法是在state里加一个preProp的值，用来与prop作对比

    // 因为这个生命周期是静态方法，同时要保持它是纯函数，不要产生副作用。
    if (new_props.num !== state.text) {
      return {
        text: new_props.num
      }

    }
    return null
  }

  handleCick = () => {
    setTimeout(() => {
      console.log(this.state.text);
      this.setState({
        text: 'aaa'
      })
    }, 0)
  }

  render() {
    console.log('child render');
    let num = this.state.text
    return (
      <div onClick={this.handleCick}>{num}</div>
    )
  }


}

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: 23
      })
    })
  }


  render(){
    let count = this.state.count
    return (
      <div>

        <Child num={count}></Child>
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