
import React, { useEffect } from 'react';
import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { addNum, getNum, addCustomNum } from '../features/counter/counterSlice'



function GameId() {
    const {name} = useParams()
    let location = useLocation()

    const num = useSelector(state => state.counter.value)

    console.log('location:',location);
    // location: {pathname: '/aaa', search: '', hash: '', state: null, key: 'default'}

    const dispatch = useDispatch()

    let [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    useEffect(() => { // 最大是640k
        console.log(3);
        // setSearchParams({
        //     id: 1,
        //     name: 12
        // })
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

    const handleAddCustomNum = () => {
        console.log(1);
        dispatch(addCustomNum(2))
        // setSearchParams({
        //     id: 1,
        //     name: 12
        // })
        console.log(2);
    }

    return (
        <>
        <Outlet></Outlet>
            GameId {name}

            Num: {num}
            

            {<button onClick={() => {handleAddNum(this)}}>+1</button>}

            <button onClick={() => {handleAddCustomNum(this)}}>+2</button>

            <button onClick={() => {handleClick(this)}}>跳转</button>
        </>
    )
}

export {
    GameId
}