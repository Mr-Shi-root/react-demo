import React, { useState } from "react";
import ReactDOM from "react-dom/client"

import Color from "./text/text-1.jsx";


// Context介绍

const ThemeContext = React.createContext('dark')

class Index extends React.Component {


    constructor(props) {
        super(props)

        this.setState = {
          colors: {
            blue: '#3339FF',
            yellow: '#E8F909',
            red: '#F32B07'
          },


        }

    }


    render() {

      const colors = this.state.colors

        return (
            <div>
              <ThemeContext.Provider value={colors}>
                <Color></Color>
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

