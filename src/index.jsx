import React, { useState } from "react";
import ReactDOM from "react-dom/client"

import Middle from "./text/text-2.jsx";


// Context介绍

import {ThemeContext} from './text/common.jsx';
class Index extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
          colors: {
            blue: '#3339FF',
            yellow: '#E8F909',
            red: '#F32B07'
          },

          count:0


        }

    }

    handleClick = () => {
      this.setState({
        count: this.state.count +1
      })
    }


    render() {

      const colors = this.state.colors

      console.log('render App');

        return (
            <div>
              <ThemeContext.Provider value={colors}>
                <button onClick={this.handleClick}>惦记</button>
                <Middle a={111}></Middle>

                {this.state.count}
              </ThemeContext.Provider>
              
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

