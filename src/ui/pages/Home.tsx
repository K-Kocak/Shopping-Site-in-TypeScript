import { contentRoutes } from '@app/constants';
import { router } from '@app/main';
import React from 'react';

import '@css/pages/Home.scss';

interface IProps {
    
}

class Home extends React.Component<IProps, never> {
    constructor(props: IProps){
        super(props);
    }

    goToLogin = () => {
        router.navigate(contentRoutes.LOGIN);
    }

    render() {
        
        return(
            <div className="homepage">
                <h2>
                    Welcome to a simple shopping site!
                </h2>
                <p>Please login to browse the site.</p>
                <button className="homepagelogin" style={{
                    border: "1px solid black",
                    background: "#EBFAFC",
                    fontSize: 23,
                    padding: "3px 10px",
                    borderRadius: 10,
                    marginTop: 20,
                    
                }} onClick={this.goToLogin}>Login Here</button>           
            </div>
        )
    }
}


export default Home;