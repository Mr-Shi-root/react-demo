import React, { useState } from "react";
import ReactDOM from "react-dom/client"


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

