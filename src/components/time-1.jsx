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
    console.log(this.props);
    console.log('child componentDidMount',e);
  }


  /**
   * 更新阶段生命周期
   * @returns 
   */

  // 接受props更新之前(将弃用)
  componentWillReceiveProps(new_props) {
    console.log('child componentWillReceiveProps', new_props);
  }
  // 使用此生命周期方法通常会出现 bug 和不一致性：
  // 如果你需要执行副作用（例如，数据提取或动画）以响应 props 中的更改，请改用 componentDidUpdate 生命周期。
  // 如果你使用 componentWillReceiveProps 仅在 prop 更改时重新计算某些数据，请使用 memoization helper 代替。
  // 如果你使用 componentWillReceiveProps 是为了在 prop 更改时“重置”某些 state，请考虑使组件完全受控或使用 key 使组件完全不受控 代替。
  // 对于其他使用场景，请遵循此博客文章中有关派生状态的建议。


  // 组件是否进行更新 【重要】
  // *** 重要 *** ，可以在这里去进行很多性能优化，防止不必要的加载
  // intro：需要返回boolean，在数据发生变化后，更新render前，控制是否执行 render
  shouldComponentUpdate(new_props, new_state) {
    console.log('child shouldComponentUpdate',new_props, new_state);
    return true
  }

  // 将要更新(将弃用)
  componentWillUpdate(new_props, new_state) {
    // 此时this.props是我是旧的props
    console.log('child componentWillUpdate',new_props, this.props, new_state);
  }

  // componentDidCatch() {

  // }


  // 更新完成后，但是在componentDidUpdate前一点点
  // 参数：prevProps, prevState
  // 应用场景：对于列表更新，假如我滚动到某一条数据时更新了列表，更新列表后，不想重新滚到这里，就可以用这个放法
  // 具体实现：在 getSnapshotBeforeUpdate 中获取更新前列表的scrollTop
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate',prevProps, prevState);
    console.log('listRef:', this.listRef);
    return {}
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
    console.log('render');
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