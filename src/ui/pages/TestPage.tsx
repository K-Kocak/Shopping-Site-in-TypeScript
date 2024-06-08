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

    decrementValue = () => {
        const currentState = this.props.pStore.value;
        this.props.pStore.setValue(currentState - 1);
    }

    render() {
        return(
            <div>
                <Link to={contentRoutes.HOME}>Hey</Link>
                <h1>PAGETWO TSX</h1>
                <button onClick={this.decrementValue}>{this.props.pStore.value}</button>
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithStore(Home, useValue);