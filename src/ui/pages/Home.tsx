import React from 'react';

interface IProps {
    
}

class Home extends React.Component<IProps, never> {
    constructor(props: IProps){
        super(props);
    }

    render() {
        
        return(
            <div>
                <h3>
                    Welcome to a simple shopping site!
                </h3>
                <p>Please login to browse</p>
                <p>A few items and prices</p>
                
                <p>User will click Login</p>             
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default Home;