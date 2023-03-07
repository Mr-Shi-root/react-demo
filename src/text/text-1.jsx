import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { ThemeContext } from '../index.jsx';

class Color extends React.Component {

    static colors = this.context;

    render() {
        return (
            <div>
                {colors}
            </div>
        )
    }
}

Color.contextType = ThemeContext;

export default Color;