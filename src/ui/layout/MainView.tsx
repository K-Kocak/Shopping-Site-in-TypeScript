import React from 'react';
import { Routes, Route } from "react-router-dom";

import { contentRoutes } from '@app/constants';

import Home from '@ui/pages/Home';
import Login from '@ui/pages/Login';
import Store from '@ui/pages/Store';
import Cart from '@ui/pages/Cart';
import Checkout from '@ui/pages/Checkout';

class MainView extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={"MainView"}>
                <Routes>
                    <Route path={contentRoutes.HOME} element={<Home />} />
                    <Route path={contentRoutes.LOGIN} element={<Login />} />
                    <Route path={contentRoutes.BROWSE} element={<Store />} />
                    <Route path={contentRoutes.CART} element={<Cart />} />
                    <Route path={contentRoutes.CHECKOUT} element={<Checkout />} />
                </Routes>
            </div>
        )
    }
}

export default MainView;