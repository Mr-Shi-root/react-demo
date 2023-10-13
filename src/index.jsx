import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import App from './Routes'
import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
console.log('store:',store);
root.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>)

