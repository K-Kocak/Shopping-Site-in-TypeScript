import React from 'react'
import { Link } from 'react-router-dom';

import '@css/layout/Navbar.scss';

import { contentRoutes } from '@app/constants';

class Navbar extends React.Component<any>{
    constructor(props: any){
        super(props);
    }

    navigate = () => {

    }

    render(){
        return(
            <div className={"Navbar"}>            
                <Link to={contentRoutes.HOME} style={{textDecoration: "none"}}>
                    <div className={"NavDiv"}>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to={contentRoutes.LOGIN} style={{textDecoration: "none"}}>
                    <div className={"NavDiv"}>
                        <p>Login</p>
                    </div>
                </Link>
                <Link to={contentRoutes.BROWSE} style={{textDecoration: "none"}}>
                    <div className={"NavDiv"}>
                        <p>Browse</p>
                    </div>
                </Link>
                <Link to={contentRoutes.CART} style={{textDecoration: "none"}}>
                    <div className={"NavDiv"}>
                        <p>Cart</p>
                    </div>
                </Link>
                <Link to={contentRoutes.CHECKOUT} style={{textDecoration: "none"}}>
                    <div className={"NavDiv"}>
                        <p>Checkout</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Navbar;