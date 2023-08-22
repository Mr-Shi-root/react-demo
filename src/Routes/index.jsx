import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import App from './Routes'

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<BrowserRouter>
  <App />
</BrowserRouter>)

