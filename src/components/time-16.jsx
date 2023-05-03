
import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom/client"

/**
 * 
 * useCallBack 和 useMemo
 * 
 * 在A组件下，多次调用另一个组件B时
 * 当其中一个B组件的某一个方法执行时，其他所有的组件都会重新渲染，
 * 因为重新执行时，B组件的方法传入发生了改变，导致所有的B组件都需要重新render
 * 这就存在性能问题，因为其他的组件也会重复render，为了解决这个问题
 * ***解决方法***
 * useCallback + shouldComponentUpdate 
 * shouldComponentUpdate：传入的对象不同时，进行重新render
 * useCallback：对传入的参数(函数)进行缓存，如果第二个参数(依赖)没有更改，才会生成新的入参
 * 
 * 这是对于一个参数进行监听，防止多次渲染，如果参数过多，则需要写多个判断
 * 为了避免这种情况，React提供了一个方法，PureComponent
 * 
 * PureComponent原理就是
 * 把props的所有属性拿出来遍历
 * 把state的所有属性拿出来遍历
 * 只要有属性的引入不一样 === ，就更新组件，否则不更新
 * 可以省略shouldComponentUpdate
 * 
 * shouldComponentUpdate的控制颗粒度更加细腻
 * 
 * React.memo就是函数式组件中的PureComponent
 * 
 * useMemo是对方法进行缓存，当重新渲染时，如果有其他经过复杂运算的函数，也要一同进行重新渲染，这就浪费了性能
 * 这时可以通过useMemo做一个缓存
 * 
 */


// class Button extends React.Component {
class Button extends React.PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.onHandleClick === nextProps.onHandleClick) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {

    const { onHandleClick, children } = this.props;

    console.log(children, ":render");

    return (
      <>
        <button onClick={onHandleClick}>{children}</button>
        <span>{Math.random()}</span>

      </>
    )
  }
}

function Index() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)


  const handleClick1 = () => {
    setCount1(count1+1);
  }

  const handleClick2 = useCallback(() => {
    setCount2(count2+1)
  }, [count2])
  
  // 这种时候，当1,3任何一个变化的时候，userInfo都会发生改变，2都需要重新渲染，此时handleClick2上的useCallback就无效了，所以也需要对他做缓存
  var userInfo = {
    name: 'james',
    age: 18
  }

  // 是一种缓存
  const userInfo = useMemo(() => {
    // 这里如果是复杂的函数，会无辜影响性能。
    return {
      name: 'james',
      age: 18
    }
  })

  console.log(count1, count2, count3);

  // button1 和 button3 绑定的都是匿名函数，每次app重新渲染，都是新的
  // button2 通过useCallback，只要button2不去发生变化，那么就不会重新渲染
  return (
    <div>
      <Button onHandleClick={handleClick1}><span>button</span></Button>
      <Button onHandleClick={handleClick2} userInfo={userInfo}>button  </Button>
      <Button onHandleClick={() => {setCount3(count3+1)}}>
        <div>qqqq</div>
      </Button>

    </div>

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


