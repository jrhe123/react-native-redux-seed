import React, { Component } from 'react';

// redux
import { Provider } from 'react-redux';
import store from './store';

// navigation 
import { StackNavigator } from 'react-navigation';

// screens
import MainScreen from './screens/MainScreen';


export default class App extends Component {
  render() {

    const MainNavigator = StackNavigator({
      Main: {screen: MainScreen}
    })

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

