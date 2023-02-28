import React from "react"
import ReactDOM from "react-dom/client"
export default function App() {
  return (
    <div>
      <h2>我是react</h2>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)