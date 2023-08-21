
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';



function GameId() {
    const {name} = useParams()
    let location = useLocation()
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