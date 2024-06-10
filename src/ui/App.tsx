import React from 'react';

import WithStore, { loginUser, userCartItems, userLogin } from '@backend/stores';

import '@css/App.scss';

import MainView from '@ui/layout/MainView';
import Navbar from '@ui/layout/Navbar';
import { CartItem } from '@backend/stores';

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
      <div className={"App"}
      onContextMenu={(e) => e.preventDefault()}>
        <Navbar />
        <MainView />
      </div>
    )
  }
}



// eslint-disable-next-line react-refresh/only-export-components
export default WithStore(App, userCartItems, userLogin);
