import React from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle= { theme.dark ?"light-content" :"dark-content"}/>
      <Text style={{color: colors.text}}>Home Screen</Text>
      {/* <Icon name="ios-menu"/>
       <Icon.Button name="ios-menu" size={30} >
      </Icon.Button>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
};

export default HomeScreen;
