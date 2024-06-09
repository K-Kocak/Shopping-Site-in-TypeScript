import React from 'react';
import { Link } from 'react-router-dom';

import WithStore, { counterValue, useValue } from '@app/backend/stores';

import { contentRoutes } from '@app/constants';

interface IProps {
    pStore: counterValue
}

class Home extends React.Component<IProps, never> {
    constructor(props: IProps){
        super(props);
    }

    incrementValue = () => {
        const currentState = this.props.pStore.value;
        this.props.pStore.setValue(currentState + 1);
    }

    render() {
        
        return(
            <div>
                <h3>
                    Welcome to a simple shopping site!
                </h3>
                <p>Please login to browse</p>
                <p>A few items and prices</p>
                <button onClick={this.incrementValue}>
                    {this.props.pStore.value}
                </button>
                <p>User will click Login</p>             
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithStore(Home, useValue);