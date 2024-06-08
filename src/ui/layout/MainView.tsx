import React from 'react';
import { Routes, Route } from "react-router-dom";


import { contentRoutes } from '@app/constants';

import Home from '@ui/pages/Home';
import TestPage from '../pages/TestPage';
import Navbar from './Navbar';

class MainView extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    

    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path={contentRoutes.HOME} element={<Home />} />
                    <Route path={contentRoutes.PAGETWO} element={<TestPage />} />
                </Routes>
            </div>
        )
    }
}

export default MainView;