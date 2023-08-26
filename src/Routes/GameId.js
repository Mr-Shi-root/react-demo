
import React, { useEffect } from 'react';
import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';



function GameId() {
    const {name} = useParams()
    let location = useLocation()

    let [urlSearchParams, setUrlSearchParams] = useSearchParams()

    console.log('urlSearchParams:',urlSearchParams);

    useEffect(() => {
        console.log('useEffect urlSearchParams: ',urlSearchParams);
    })
    
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
            GameId {name}

            <button onClick={() => {handleClick(this)}}>跳转</button>
        </>
    )
}

export {
    GameId
}