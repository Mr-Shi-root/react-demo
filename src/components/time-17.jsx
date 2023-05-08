import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client"


/**
 * 
 * useRef()
 * 类似于vue的this.$ref.xxxx
 * 
 */

function Button() {
  const inputRef = useRef()

  const onHandleClick = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onHandleClick}>onClick</button>
    </div>
  )
}


class Index extends React.Component {


    constructor(props) {
        super(props)

        this.setState = {


        }
 
    }


    render() {

        return (
            <div>
              <Button></Button>
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