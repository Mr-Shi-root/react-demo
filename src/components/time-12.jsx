import React, { useState } from "react";
import ReactDOM from "react-dom/client"

// Hooks 简介
// Hooks 就是在函数式组件里，可以使用钩子
//（面试考点🌟🌟🌟🌟🌟）
// 
/**
 * 解决问题：
 * 
 * 1.在组件之间复用状态逻辑很难
 * provider，consumer，高阶组件等抽象组件，虽然可以解决复用问题，但是会形成“嵌套”地狱，
 * 所以通过react为共享状态提供了更好的原生途径（HOOKS） （面试考点🌟🌟🌟🌟🌟）
 * 你可以使用HOOK从组件中提取状态逻辑，是的这些逻辑可以单独测试并复用，Hook使你在无需修改组件结构的情况下复用状态逻辑
 * 这使得在组件间或社区内共享hook变得更便捷（面试考点🌟🌟🌟🌟🌟 背诵）
 * 
 * 2.复杂组件变得难以理解 
 * 维护的组件，起初很简单，但是逐渐会被状态逻辑和副作用充斥，每个生命周期常常包含一些不相关的逻辑（操作dom，发起请求，json数据处理）
 * 所以要用redux
 * 
 * 解决方法是用Hook蒋组件中相互关联的部分拆分成更小的函数（面试考点🌟🌟🌟🌟🌟）
 * 
 * 3.难以理解的class 
 * class组件会无意中鼓励开发者使用一些让优化措施无效的方案。class的问题，不能很好的压缩，并且会使热重载不稳定
 * 解决方法是，Hooks会让非class的状态下可以使用更多的react特性。
 * 
 * 总结：react更像是函数，hooks拥抱了函数。
 * 
 * 小技巧：
 * 1.面试官倾向class，疯狂说class的好
 * 2.面试官倾向hooks，追捧hooks
 * 
 */


/**
 * Hooks渐进策略（怎么把hooks加入到老的项目中）
 * 开始用“hook的方式思考”前，需要做一些思维上的转变。在原有的class上，从小的组件开始改造，并且所有人都能适应。
 * 
 */

// 副作用，请求，函数里操作dom
 

class Index extends React.Component {


    constructor(props) {
        super(props)

        this.state = {


        }

    }


    render() {

        return (
            <div></div>

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

