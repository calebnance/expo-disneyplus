import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import StackProfile from './StackProfile';

export default createBottomTabNavigator(
  {
    StackHome,
    StackSearch,
    StackDownloads,
    StackProfile
  },
  {
    initialRouteName: 'StackHome',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.inactiveGrey,
      showLabel: false,
      style: {
        backgroundColor: colors.tabBackground,
        borderTopWidth: 0
      }
    }
  }
);
