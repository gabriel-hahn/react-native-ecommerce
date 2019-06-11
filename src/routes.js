import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import Main from '~/pages/Main';
import Cart from '~/pages/Cart';

const Home = createStackNavigator({ Main });
const CartList = createStackNavigator({ Cart });

const BottomNavigatorConfig = {
  tabBarOptions: {
    showLabel: false,
  },
};

const RouterConfig = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <FAwesomeIcon name="home" size={20} color={focused ? '#f19d9d' : '#e2e2e2'} />
        ),
      }),
    },
    CartList: {
      screen: CartList,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <FAwesomeIcon name="shopping-cart" size={20} color={focused ? '#f19d9d' : '#e2e2e2'} />
        ),
      }),
    },
  },
  BottomNavigatorConfig,
);

const Routes = createAppContainer(RouterConfig);

export default Routes;
