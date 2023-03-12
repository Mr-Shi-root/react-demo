import React from 'react';
import Color from './text-1.jsx'

class Middle extends React.Component {

    shouldComponentUpdate(a,b) {
        console.log('2222',a,b);
        return false
    }

    render() {

        console.log('render Middle');

        return (
            <div>
                <Color></Color>
            </div>
         )
    }
}

export default Middle