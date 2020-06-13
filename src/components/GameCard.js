import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import {Text, H1, Icon} from 'native-base';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const GameCard = ({imageSource, gameTitle, playerAmmount, players, onPlayerPress}) => {
  let joined = players.length;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageSource}
        style={styles.backgroundImage}
        imageStyle={{borderRadius: 20}}>
        <View style={styles.playerRibbon}>
          {players.map((player) => (
            <TouchableOpacity onPress={() => {onPlayerPress(player)}}>
              <Image source={player.avatar} style={styles.avatar} />
            </TouchableOpacity>
          ))}
          {renderRest(joined, playerAmmount)}
        </View>
      </ImageBackground>
    </View>
  );
};

const renderRest = (joined, playerAmmount) => {
  let rest = [];
  for (let i = joined; i < playerAmmount; i++) {
    rest.push(
      <TouchableOpacity style={[styles.avatar, {backgroundColor: '#32e0c4'}]}>
        <Icon name="plus" type="Entypo" style={{color: '#393e46'}} />
      </TouchableOpacity>,
    );
  }
  return <>{rest}</>;
};

// const renderPlayers = ({item}) => {
//   console.log('item', item);
//   return <Image source={item.avatar} style={styles.avatar} />;
// };

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#222831',
    height: 200,
    margin: 10,
  },
  title: {
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  playerRibbon: {
    backgroundColor: '#0008',
    flexDirection: 'row',
    marginTop: 120,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 10,
    resizeMode: 'cover',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameCard;
