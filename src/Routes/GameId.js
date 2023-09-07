
import React, { useEffect } from 'react';
import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { addNum, getNum } from '../features/counter/counterSlice'



function GameId() {
    const {name} = useParams()
    let location = useLocation()
    console.log(location);

    let [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    useEffect(() => { // 最大是640k
        // setSearchParams({
        //     id: 1,
        //     name: 12
        // })

        console.log(searchParams.get('name'));
    })

    const handleClick = () => {

        setSearchParams({
            id: 1,
            name: 12
        })
        
        navigate('/1321', {
            state: {
                sex: 'nv',
                class: '123'
            }
        })

    }

    return (
        <>
        <Outlet></Outlet>
            GameId {name}

            

            <button onClick={() => {handleClick(this)}}>+1</button>

            <button onClick={() => {handleClick(this)}}>跳转</button>
        </>
    )
}

export {
    GameId
}