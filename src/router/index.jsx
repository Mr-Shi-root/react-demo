import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, RouterContext } from './router'


function Home(params) {
  return (
    <h1>Home</h1>
  )
}

function About(params) {
  return (
    <h1>About</h1>
  )
}

function Name(params) {
  return (
    <h1>Name</h1>
  )
}

export default function App() {

  return (
    // BrowserRouter 知道现在的浏览器路由，并且通过 RouterContext的provider传给所有子节点
    <BrowserRouter> 
      {/* RouterContext是 BrowserRouter里声明的Context，然后通过consumer获取对象router，里面有path和goPath */}
      <RouterContext.Consumer>
          {
            (router) => (
              <>
                {router.path} <br />

                <button onClick={() => {router.goPath('/')}}>Home</button>
                <button onClick={() => {router.goPath('/about')}}>About</button>
                <button onClick={() => {router.goPath('/name')}}>Name</button>

                {/* Route组件，根据路径，返回组件 */}
                <Route path={'/'} component={Home}></Route>
                <Route path={'/about'} component={About}></Route>
                <Route path={'/name'} component={Name}></Route>


              </>
            )
          }
    
      </RouterContext.Consumer>
      
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)