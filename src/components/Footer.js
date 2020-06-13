import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Footer = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="logo-game-controller-b" type="Ionicons" style={{color: '#eeeeee'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ios-chatboxes" type="Ionicons" style={{color: '#eeeeee'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButton}>
          <Icon name="ios-home" type="Ionicons" style={{color: '#222831'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ios-notifications" type="Ionicons" style={{color: '#eeeeee'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="face-profile" type="MaterialCommunityIcons" style={{color: '#eeeeee'}}/>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#222831',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  mainButton: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#32e0c4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Footer;
