
import React, { useEffect } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';



function GameId() {
    const {name} = useParams()
    let location = useLocation()

    let [urlSearchParams, setUrlSearchParams] = useSearchParams()

    console.log('urlSearchParams:',urlSearchParams);

    useEffect(() => {
        console.log('useEffect urlSearchParams: ',urlSearchParams);
    })
    
    console.log(location);
    return (
        <>
            GameId {name}
        </>
    )
}

export {
    GameId
}