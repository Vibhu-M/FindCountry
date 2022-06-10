import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import { CountryProvider } from './src/context/CountryContext';

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
    },
    {
        initialRouteName:'Search',
        defualtNavigationOptions: {
            title: 'Countries'
        }
    }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <CountryProvider><App/></CountryProvider>
  )
}

