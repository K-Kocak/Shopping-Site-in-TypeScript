import React from 'react';

import { router } from "@app/main";

import WithStore, { useValue } from '@backend/stores';

import '@css/App.scss';

import MainView from '@ui/layout/MainView';

interface IProps {

}

class App extends React.Component<IProps, never> {
  constructor(props: IProps){
    super(props);
  }

  

  render() {
    return (
      <div className={"App"}
      onContextMenu={(e) => e.preventDefault()}>
        <MainView />
      </div>
    )
  }
}



// eslint-disable-next-line react-refresh/only-export-components
export default WithStore(App, useValue);
