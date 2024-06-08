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
                <h1>Home TSX</h1>
                <Link to={contentRoutes.PAGETWO}><button>Test</button></Link>
                <button onClick={this.incrementValue}>{this.props.pStore.value}</button>
                
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithStore(Home, useValue);