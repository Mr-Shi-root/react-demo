import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// react写一个简单的列表
// 受控组件、 表单提交


/**
 * 写一个简单的列表
 * @returns 
 */
// 传值的时候，记得用{}括起来
// const Name = ({item, arr}) => {
//   let {id, name, info} = item
//   console.log(id, name, info);
//   console.log(arr);
//   return (
//     <div>
//       {/* 可以通过ite.xx来赋值 */}
//       {item.id} 

//       {/* 也可以通过解构赋值来赋值 */}
//       {id}, {name}, {info}

//     </div>
//   )
// }
// class Index extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//       const shopList = [
//         {
//           id: 123,
//           name: 'qqq',
//           info: 'qqqq',
//         },
//         {
//           id: 134,
//           name: 'www',
//           info: 'wwww',
//         },
//         {
//           id: 156,
//           name: 'eee',
//           info: 'eeee',
//         },
//         {
//           id: 177,
//           name: 'rrr',
//           info: 'rrrr',
//         },
//         {
//           id: 143,
//           name: 'ttt',
//           info: 'tttt',
//         },

//       ]

//       const arr = [1,2,3,4]
//         return (   
//             <div>
//               {
//                 shopList.map((item, index) => {
//                   return <Name item={item} arr={arr} key={item.id} />
//                 })
//               }
//             </div>
//         )
//     }
// }


/**
 * 受控组件 必须通过setstate改变值
 * input.textarea input.text form select
 * @returns 
 */
class Index extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { 
          value: '11',
        }
    }

    handleClick = (e) => { 
      console.log(e.target.value);
      // this.setState({
      //   value: e.target.value
      // })
    }

    render() {    
      console.log('RENDER');            
        return (   
            <div>
              {this.state.value}
              <input type="text" name="aaa" id="first" placeholder="123" onChange={this.handleClick} />
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

