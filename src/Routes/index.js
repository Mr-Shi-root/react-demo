import  React  from 'react';
import {Routes, Route} from 'react-router-dom'
import { Leagues } from './Leagues';
import { NeverDie } from "./NeverDie";
import { GameId } from "./GameId";
import { EditGameId } from "./EditGameId";

/**
 * 
 * @returns 
 * Route里的Outlet，相当于vue的插槽
 * 
 * :name :id 动态路由，自定义输入
 * 
 * react-route-dom的方法
 * BrowserRouter Routes Route // 路由的方法
 * BrowserRouter：获取浏览器当前的路由信息
 * Routes：路由集合
 * Route：路由组件 path 和 element
 * 
 * useParams useLocation useSearchParams useNavigate
 * useParams：获取路由路径
 * useLocation：浏览器url上的信息对象，有path等，具体的输出看吧
 * useSearchParams：
 * useNavigate： 路由跳转，并且可以通过state传递一些页面需要的参数，可不在url上显示
 *      参数：跳转路径，参数 { state: { xxxx: xxxx }}
 * 
 * 
 * 
 */

function App() {
    return (
        <Routes>

            {/* 多路由的情况 */}
            <Route path='/' element={<Leagues />}>
                <Route path=':id/edit' element={<EditGameId />}></Route>
                <Route index element={<NeverDie />}></Route>
                <Route path=':name' element={<GameId />} />
                
            </Route>

            {/* 可以在公共部分里面加变量组件 */}
            <Route element={<Leagues />}>
                <Route path='/table' element={<GameId />} />
            </Route>
            


        </Routes>
    )
}

export default App