import React from 'react'
import { Link } from 'react-router-dom';

import '@css/layout/Navbar.scss';

import { contentRoutes } from '@app/constants';

import WithStore, { userLogin, loginUser, userCartItems, CartItems } from '@app/backend/stores';
import { router } from '@app/main';

interface IProps {
    pStore: loginUser,
    sStore: CartItems
}

class Navbar extends React.Component<IProps, any>{
    constructor(props: IProps){
        super(props);
    }

    tryBrowseRoute = () => {
        if(this.props.pStore.username !== "") {
            router.navigate(contentRoutes.BROWSE);
        }
    }

    tryCartRoute = () => {
        if(this.props.sStore.CartItems.length !== 0) {
            router.navigate(contentRoutes.CART);
        }
    }

    render(){
        return(
            <div className={"Navbar"}>            
                <Link to={contentRoutes.HOME} style={{textDecoration: "none"}}>
                    <div className={"NavDiv home"}>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to={contentRoutes.LOGIN} style={{textDecoration: "none"}}>
                    <div className={"NavDiv"}>
                        <p>Login</p>
                    </div>
                </Link>
                
                    <div onClick={this.tryBrowseRoute} className={"NavDiv"}>
                        <p>Browse</p>
                    </div>
                
                
                    <div onClick={this.tryCartRoute} className={"NavDiv cart"}>
                        <p>Cart</p>
                    </div>  
            </div>
        )
    }
}

export default WithStore(Navbar, userLogin, userCartItems);