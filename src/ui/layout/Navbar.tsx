import React from 'react'
import { Link } from 'react-router-dom';

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
                <Link to={contentRoutes.HOME}><div><p>Home</p></div></Link>
                <div>div2</div>
                <div>div3</div>
                <div>div4</div>
                <div>div5</div>
            </div>
        )
    }
}

export default Navbar;