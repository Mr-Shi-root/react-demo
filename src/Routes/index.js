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
 * useParams useLocation useSearchParams
 * 
 * 
 */

function App() {
    return (
        <Routes>

            {/* 多路由的情况 */}
            <Route path='/' element={<Leagues />}>
                <Route path=':id/edit' element={<EditGameId />} />  
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