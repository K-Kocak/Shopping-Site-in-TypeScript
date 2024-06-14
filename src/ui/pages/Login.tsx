import React, { BaseSyntheticEvent } from 'react';

import { contentRoutes } from '@app/constants';

import { loginUser, userLogin } from '@app/backend/stores';
import WithStore from '@app/backend/stores';

import { router } from '@app/main';

import '@css/pages/Login.scss'

interface IProps {
    pStore: loginUser
}

class Login extends React.Component<IProps, never> {
    constructor(props: IProps){
        super(props);
    }

    /*decrementValue = () => {
        const currentState = this.props.pStore.value;
        this.props.pStore.setValue(currentState - 1);
    }*/
      /*  <button onClick={this.decrementValue}>{this.props.pStore.value}</button>*/

    submitForm = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        const formValues: string[] = [event.target[0].value, event.target[1].value];
        this.props.pStore.setUsername(formValues[0]);
        this.props.pStore.setPassword(formValues[1]);
        router.navigate(contentRoutes.BROWSE);
    }

    render() {
        return(
            <div className="logincontainer">
                <div className="loginformsection">
                    <form onSubmit={this.submitForm}>
                        <div className="inputfield">
                            <span>Username: </span>
                            <input type="text" placeholder='Enter your username...'>
                            </input>
                        </div>
                        <div className="inputfield">
                        <span>Password: </span>
                            <input type="password" placeholder='Enter your username...'>
                            </input>
                        </div>   
                        <div className="submitbutton">
                            <button type="submit">Login</button>
                        </div>                                     
                    </form>
                </div>            
            </div>
        )
    }
}

export default WithStore(Login, userLogin);