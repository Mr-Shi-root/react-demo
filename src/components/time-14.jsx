import React, { useState } from "react";
import ReactDOM from "react-dom/client"

/**
 * useEffect中的return用来清除组件的副作用，
 * 
 * 此代码的含义，模拟了发布订阅 在ChatApi里存了数据
 * 
 * 不同的人调用FriendStatusWithCounter，往ChatApi里存数据，
 * 
 * 
 * 在FriendStatusWithCounter中就要有清除步骤，不然会导致
 * 
 * ！！！导致FriendStatusWithCounter注销后，存在ChatApi里的数据无用，但是还无法释放。
 * 
 * 
 * 
 */

class ChatAPI {
  constructor() {
    this.listener = {}
  }

  // 订阅
  subscribeToFriendStatus(id, callBack) {
    if(!this.listener[id] === null) {
      this.listener[id] = []
    }
    this.listener[id].push(callBack)
  }

  // 取消订阅
  unsubscribeFromFriendStatus(id, callBack) {
    const index = this.listener[id].indexOf(callBack)
    this.listener[id].splice(index, 1)
  } 

  // 发布
  publish(status) {
    for (const key in this.listener) {
      if (Object.hasOwnProperty.call(this.listener, key)) {
        const element = this.listener[key];
        for (const iterator of element) {
          iterator(status)
        }
      }
    }
  }


  
}

function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => { 
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
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

