import React from 'react';
import {View} from 'react-native';

const ProgressBar = ({xp, nextLvl}) => {
  const percentage = `${Math.floor((xp / nextLvl) * 100)}%`;
  return (
    <View style={{height: 10, flex: 1, backgroundColor: '#eeeeee', margin: 20}}>
      <View style={{height: 10, width: percentage, backgroundColor: '#32e0c4'}}/>
    </View>
  );
};

export default ProgressBar;
