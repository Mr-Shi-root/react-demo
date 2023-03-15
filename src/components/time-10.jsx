/**
 * 发布订阅模式/ HOC
 */

// 区别于观察者模式，发布订阅模式会有一个“中转站”，是发布者和订阅者之间的桥梁，使得双方互不知情。只传递消息
// 所有订阅者可以获取信息，也可以去进行订阅，做出评论。
// 发布者会进行发布，让所有订阅者能看到
// 

/**
 * 
 * 本组件不能进行代替，因为写的是伪代码
 * 如想进行操作，可自行修改。    
 *   
 */


// Demo （发布订阅）

import React, { useState } from "react";
import ReactDOM from "react-dom/client"

export default function App() {

  return (
    <div>
      <h2>我是react1</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)

// 邮局 
class DataSource {

  constructor() {
    this.packList = []
  }

  // 订阅
  register(callBack) {
    this.packList.push(callBack)
  }

  // 发布
  publish(data) {
    for (const listener of this.packList) {
      listener(data)
    }
  }

}

const data_source = new DataSource()

// 订阅者1
data_source.register((data) => {
  console.log('好看！！', data);
})

// 订阅者2
data_source.register((data) => {
  console.log('不好看！！', data);
})


data_source.publish('人民日报')

// 发布（DataSource）： 一旦DataSource内部发生变化，会调用所有订阅者的函数，支持订阅者添加，和销毁

// 订阅者，可以有自己的class，有自己的方法，也可以去调用DataSource的方法，

//Subscriber 订阅者1 Car
class Car extends React.Component {
  constructor() {
    this.state = {
      carList: DataSource.getAllCar()
    }
  }

  // 订阅创建以后，会给发布者DataSource里添加函数
  componentDidMount() {
    DataSource.register(this.handleChange)
  }

  componentWillUnmount() {
    DataSource.disRegister()
  }
  // 数据改变了，这个函数是DataSource调用的，订阅者的改变了
  handleChange = () => {
    this.setState({
      carList: DataSource.getAllCar()
    })
  }

}

class Computer extends React.Component {
  constructor() {
    this.state = {
      computerList: DataSource.getAllComputer()
    }
  }

  // 订阅创建以后，会给发布者DataSource里添加函数
  componentDidMount() {
    DataSource.register(this.handleChange)
  }

  componentWillUnmount() {
    DataSource.disRegister()
  }
  // 数据改变了，这个函数是DataSource调用的，订阅者的改变了
  handleChange = () => {
    this.setState({
      carList: DataSource.getAllComputer()
    })
  }

}


// 重点来了，这种订阅者，如果存在很多，而且都是存在着读取，赋值，销毁的操作，冗余的代码会很多，所以就给他提取出来
// 变成 可变的东西通用+不变的，这就是高级组件，函数组件 
// 类似 vue 的 mixin 

// 基于上面的 Car 和 Computer ，开始做 HOC

function withSubscription(Component, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        // 参数根据外面传的，定义，HOC中不会定义任何数据和与外部相关的方法
        data: selectData(DataSource, props)
      }
    }

    // 订阅创建以后，会给发布者DataSource里添加函数
    componentDidMount() {
      DataSource.register(this.handleChange)
    }

    componentWillUnmount() {
      DataSource.disRegister()
    }
    // 数据改变了，这个函数是DataSource调用的，订阅者的改变了
    handleChange = () => {
      this.setState({
        carList: selectData(DataSource, props)
      })
    }

    render() {
      return (
        <Component {...props} data={this.state.data}></Component>
      )
    }
  }
}

// withSubscription 就是 HOC 模型

// 当多个组件要声明的时候

const A = withSubscription(
  <CarComponent />,
  (D, p) => {
    return DataSource.getAllCar()
  }
)

const B = withSubscription(
  <CumpoterComponent />,
  (D, p) => {
    return DataSource.getAllComputer()
  }
)

// 其中 <CarComponent />, <CumpoterComponent />,就是ui模型组件，数据由 A，B通过props传入
// A, B,就是经过HOC包装后的组件, 可以通过props将数据传给UI模型组件

// HOC 注意事项
// 1.不要试图在HOC中修改组件原型
// 2.HOC一定要保证是一个纯函数
//    什么是纯函数？
//      1) 职责单一
//      2) 参数不要修改引用 (data) => { data.xxx = xxx }
// 3.不要再render中使用HOC 会有性能问题，也不友好
//      1) let A = withSubscription(<Com>, func); class App { render() {return <A></A>} } // 在组件外调用
//      2) class App { construction() {this.a = withSubscription(<Com>, func);}render() {let A = this.a; return <A></A>} } // 构造函数里调用


// HOC 不能调用组件里的 静态属性 
// 即 CarComponent 里有一个 state getName() 方法， 那么A实例出高阶组件，不能A.getName()!!
// 解决办法， 一个库 hoist-non-react-statics

// HOC 里的 Ref 问题
// ref 应该是获取 CarComponent组件， 但是实际返回的是 HOC里定义的类组件， 这个本质上是说不通的
// 解决方法： 通过 React.forwardRef() 方法
/**
 * 
 * function withHOC(Com) {
 *    class App extends React.Component {
 *        render() {
 *           const { forwardRef, ...rest } = this.props
 *           return <Com />
 *        }
 *    }
 *    // HOC里进行ref转化
 *    return React.forwardRef((props, ref) => {
 *        return <App {...props} forwardRef={ref}>
 *    })
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 */