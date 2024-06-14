import React from 'react';

import { loginUser, userCartItems, userLogin, CartItem } from '@backend/stores';
import WithStore from '@backend/stores';

import '@css/App.scss';

import MainView from '@ui/layout/MainView';
import Navbar from '@ui/layout/Navbar';
import Footer from '@ui/layout/Footer';


interface IProps {
  pStore: CartItem[],
  sStore: loginUser
}

class App extends React.Component<IProps, never> {
  constructor(props: IProps){
    super(props);
  }

  

  render() {
    return (
      <div className={"App"}>
        <Navbar />
        <MainView />
        <Footer />
      </div>
    )
  }
}



export default WithStore(App, userCartItems, userLogin);
