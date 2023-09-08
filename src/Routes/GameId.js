
import React, { useEffect } from 'react';
import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { addNum, getNum } from '../features/counter/counterSlice'



function GameId() {
    const {name} = useParams()
    let location = useLocation()

    let num = useSelector(state => state.counter.value)

    const dispatch = useDispatch()

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

    const handleAddNum = () => {
        dispatch(addNum())
    }

    return (
        <>
        <Outlet></Outlet>
            GameId {name}

            Num: {num}
            

            <button onClick={() => {handleAddNum(this)}}>+1</button>

            <button onClick={() => {handleClick(this)}}>跳转</button>
        </>
    )
}

export {
    GameId
}