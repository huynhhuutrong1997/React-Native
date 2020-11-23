import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import RootStackScreen from './screens/RootStackScreen'


const Drawer = createDrawerNavigator();



const App = () => {
  return (
   <NavigationContainer>
     <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Main" component={MainTabScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
      </Drawer.Navigator> */}
   </NavigationContainer>
  );
};

export default App;
