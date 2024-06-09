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

    submitForm = () => {
        
    }

    render() {
        return(
            <div>
                <div>
                    <form onSubmit={this.submitForm}>
                        <div>
                            <span>Username: </span>
                            <input type="text" placeholder='Enter your username...'>
                            </input>
                        </div>
                        <div>
                        <span>Password: </span>
                            <input type="password" placeholder='Enter your username...'>
                            </input>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
                <button onClick={this.decrementValue}>{this.props.pStore.value}</button>
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithStore(Home, useValue);