import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Users from './screens/Users'
import Posts from './screens/Posts'
import Details from './screens/Details'

const AppNavigator = createStackNavigator({
  Users: {
    screen: Users
  },
  Posts: {
    screen: Posts
  },
  Detail: {
    screen: Details
  }
}, {
  initialRouteName: 'Users'
});

export default createAppContainer(AppNavigator);
