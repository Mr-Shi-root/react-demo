import React, {useEffect, useState} from 'react';


const RouterContext = React.createContext()

// 
function BrowserRouter(props) {

    console.log('BrowserRouter.props: ', props);

    const [path, setPath] = useState(window.location.pathname || '')

    // 点击前进后退的时候，改变路由
    // window.onpopstate = () => {
    //     console.log(1111);
    //     setPath(window.location.pathname)
    // }


    // 点击前进后退的时候，改变路由
    function handlePopState() {
        console.log('handlePopState');
        setPath(window.location.pathname)
    }

    useEffect(() => {
        window.addEventListener('popstate', handlePopState)

        return function() {
            window.removeEventListener('popstate', handlePopState)
        }
    })

    const goPath = function(path) {
        setPath(path)
        window.history.pushState({path}, '', path)
    }

    const router = {
        path, 
        goPath
    }


    return (
        <RouterContext.Provider value={router}>
            {/* 相当于插槽？ */}
           {props.children}
        </RouterContext.Provider>
    )

    
    
}


// 用当前的浏览器路由，和props的路由对比，返回组件
// Route组件 不一定是 BrowserRouter的子节点
function Route(props) {
    const path = props.path;
    let Component = props.component;
    
    return (
        <RouterContext.Consumer>
            {(router) => {
                return path === router.path ? <Component></Component> : null
            }}
        </RouterContext.Consumer>
    )
}

export {
    BrowserRouter,
    Route,
    RouterContext
}

