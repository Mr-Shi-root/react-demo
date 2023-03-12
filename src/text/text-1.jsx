import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";

import {ThemeContext} from './common.jsx';

// 通过 useContext 和 Consumer 方法，来渲染themeContext
// Consumer 是专门用来渲染 函数式组建的
// 类组件是用 Class.contextType = ThemeContent + this.context 来使用

// 如果有多个Context, 对于Consumer来说，对于多层嵌套，应该进行多层Consumer解析，按照provider进行解析


console.log(ThemeContext);   

// function Color() {
//     console.log('render Color');
//     const colors = useContext(ThemeContext)
//     // console.log('colors::::', colors);
//     return (
//         <div>
//             {colors.blue}
//             <br />
//             111222
//         </div>
//     )
// }


function Color() {
    console.log('render Color');
    return (
        <div>
            <ThemeContext.Consumer>
                {(value) => <button>{value.blue}</button>}
            </ThemeContext.Consumer> 
            <br />
            111222
        </div>
    )
}


export default Color;