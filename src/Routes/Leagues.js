import React from 'react';
import { Outlet } from 'react-router-dom';

function Leagues() {
    return (
        <h1>Leagues <Outlet /></h1>
    )
}

export {
    Leagues
}