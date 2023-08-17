import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route } from './router'


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
    <BrowserRouter>

      <>

        <Route path={'/'} component={Home}></Route>
        <Route path={'/about'} component={About}></Route>
        <Route path={'/name'} component={Name}></Route>

      </>
    
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)