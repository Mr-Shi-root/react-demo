import React, { useState } from "react";
import ReactDOM from "react-dom/client"

/**
 * 直接运行，需要更改路径
 */
import './stylus/index.css';

// 购物车筛选案例
// 组件嵌套
// 列表渲染




// class NameSearch extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     handleClick = (e) => {
//         this.props.setValue(e.target.value)
//     }
//     render() {
//         const value = this.props.value
//         return (
//             <input type="text" onChange={this.handleClick} name="search" placeholder="请输入产品名称" id="" />
//         )
//     }
// }

function NameSearch(props) {
    function handleClick(e) {
        props.setValue(e.target.value)
    }
    return (
        <input type="text" onChange={handleClick} value={props.value} name="search" placeholder="请输入产品名称" id="" />
    )
}

function CheckState(props) {
    function handleClick(e) {
        // console.log(e.target.checked);
        props.toggleCheck(e.target.checked)
    }
    return (
        <div>
            <input type="checkbox" onChange={handleClick} checked={props.checked} name="" id="male" />
            <label htmlFor="male">是否过滤无库存</label>
        </div>
    )
}

function ClassTitle(props) {
    return (
        <tr>
            <th colSpan={2}>
                {props.state}
            </th>
        </tr>
    )
}

function ShopInfo(props) {
    return (
        <tr>
            <td>
                <span className={!props.item.stock ? 'none-stock' : ''}>{props.item.name}</span>
            </td>
            <td>{props.item.price}</td>
        </tr>
    )
}


class SkuList extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        const rows = []

        let arr = this.props.shopList

        let lastCategody = null;

        arr.forEach((item) => {
            if (lastCategody !== item.state) {
                rows.push(
                    <ClassTitle state={item.state} key={item.state}>

                    </ClassTitle>
                )
            }
            lastCategody = item.state;

            if (!(this.props.isCheck && !item.stock)) {
                rows.push(<ShopInfo item={item} key={item.id} />)
            }
            

        });

        return (

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        )
    }
}




class Index extends React.Component { 

    constructor(props) {
        super(props)

        this.state = {
            value: 'ip', 
            isCheck: false
        }

    }

    setValue = (value) => {
        console.log(value);
        this.setState({
            value: value
        })
    }
    toggleCheck = (value) => {
        this.setState({
            isCheck: value
        })
    }


    render() {

        const arr = !this.state.value ? this.props.arr : this.props.arr.filter(item => {
            return item.name.includes(this.state.value)
        })

        return (
            <div>
                <NameSearch value={this.state.value} setValue={this.setValue}></NameSearch>
                <CheckState toggleCheck={this.toggleCheck}></CheckState>


                <SkuList shopList={arr} isCheck={this.state.isCheck} value={this.state.value}></SkuList>



            </div>

        )

    }


}

export default function App() {

    const arr = [
        {
            id: 1,
            state: 'machine',
            name: 'ipad pro',
            price: '$123',
            stock: true
        },
        {
            id: 2,
            state: 'machine',
            name: 'ipad air',
            price: '$234',
            stock: true
        },
        {
            id: 3,
            state: 'machine',
            name: 'iphone12',
            price: '$223',
            stock: false
        },
        {
            id: 4,
            state: 'machine',
            name: 'iphone13',
            price: '$456',
            stock: true
        },
        {
            id: 5,
            state: 'machine',
            name: 'macBookPro',
            price: '$789',
            stock: true
        },
        {
            id: 6,
            state: 'package',
            name: '爱马仕',
            price: '¥1234',
            stock: true
        },
        {
            id: 7,
            state: 'package',
            name: 'LV',
            price: '¥789',
            stock: true
        },
        {
            id: 8,
            state: 'package',
            name: 'MLB',
            price: '¥789',
            stock: false
        },
        {
            id: 9,
            state: 'package',
            name: 'GUCCI',
            price: '¥9000',
            stock: true
        },
    ]

    return (
        <div>
            <Index arr={arr}></Index>
            <h2>加油</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(document.getElementById("root"));
root.render(<App />)

