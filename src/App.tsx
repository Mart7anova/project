import React, {Suspense} from 'react';
import {Counter} from "./components/Counter";
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";

export const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainAsync/>}/>
                    <Route path={'/about'} element={<AboutAsync/>}/>
                </Routes>
            </Suspense>

            <Counter/>
        </div>
    );
};
