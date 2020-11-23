import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    // style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarColor:'#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor:'#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor:'#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation})=>{
  return(
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
      }
    }}
    >
       <HomeStack.Screen name="Home" component={HomeScreen}
          options={{
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25}
              backgroundColor="#009387"
              onPress={ () => navigation.openDrawer()}
              >
              </Icon.Button> 
            ),
          }}
       />
     </HomeStack.Navigator>
  );
  
}

const DetailsStackScreen = ({navigation})=>{
  return(
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
      }
    }}
    >
       <DetailsStack.Screen name="Details" component={DetailsScreen} 
        options={{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor="#1f65ff"
            onPress={ () => navigation.openDrawer()}
            >
            </Icon.Button> 
          ),
        }}
       />
     </DetailsStack.Navigator>
  );
}