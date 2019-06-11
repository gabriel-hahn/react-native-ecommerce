import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import ProductDetails from '~/pages/ProductDetails';
import Cart from '~/pages/Cart';

const Routes = createAppContainer(createStackNavigator({ Main, ProductDetails, Cart }));

export default Routes;
