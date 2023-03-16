import React from "react"
import ReactDOM from "react-dom/client"



// 对比类组件和函数组件
// 类组件有生命周期，调用通过实例render，函数组件



// react的生命周期之【更新】【挂载】

// 挂载

class Child extends React.Component {

  constructor(props) {
    super(props);
    console.log('child constructor');

    this.state = {
      count: 0
    }

    this.listRef = React.createRef()
  }

  /**
   * 挂载阶段生命周期
   */

  // 销毁时候(将弃用)
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  // 挂载之前 
  componentWillMount(e) {
    console.log('child componentWillMount',e);
  }

  // 挂载完成 【重要】
  componentDidMount(e) {
    this.setState({
      count: this.state.count + 1
    })
    console.log('child componentDidMount',e);
  }

  // 更新完成
  componentDidUpdate(old_props, new_state, snapshot) {
    // 此时this.props是我是新的props
    // snapshot 是上面 getSnapshotBeforeUpdate 函数的返回值
    const list = this.listRef.current;
    console.log(list.scrollTop);
    console.log('child componentDidUpdate',old_props, this.props, new_state, snapshot);
  }





  render() {
    console.log('render', this.state.count);
    const { num } = this.props
    return (
      <div ref={this.listRef}>aaaa
        {num}
        <span>111</span>
        <h1>2222</h1>
      </div>
    )
  }
}

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      flag: true,
      count: 0
    }
  }
  handleClick = () =>  {
    console.log('handleClick', this.state.flag);
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })           
        }, 0)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: 1
      })
    }, 0)
  }

  render() {
    return (
      <div>
        {this.state.flag ? <Child num={this.state.count}></Child> : null}
        <h2 onClick={this.handleClick}>点击</h2>
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