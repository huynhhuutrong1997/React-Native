import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
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
