import React from 'react';
import {Container, Text} from 'native-base';
import {View, Image} from 'react-native';

import GameCard from '../components/GameCard';
import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../components/Footer';

const HomeView = ({navigation}) => {
  const playersCS = [
    {
      name: 'Marcel',
      avatar: require('../assets/img/nigga.png'),
    },
    {
      name: 'Player 1',
      avatar: require('../assets/img/excellent.png'),
    },
    {
      name: 'CPU',
      avatar: require('../assets/img/Avatar.png'),
    },
  ];
  const playersStar = [
    {
      name: 'Player 1',
      avatar: require('../assets/img/excellent.png'),
    },
    {
      name: 'CPU',
      avatar: require('../assets/img/Avatar.png'),
    },
  ];
  const playersApex = [
    {
      name: 'CPU',
      avatar: require('../assets/img/Avatar.png'),
    },
  ];
  const playersMc = [
    {
      name: 'Marcel',
      avatar: require('../assets/img/nigga.png'),
    }
  ];

  return (
    <Container style={{backgroundColor: '#393e46'}}>
      <ScrollView>
        <GameCard
          gameTitle="CS:GO"
          imageSource={require('../assets/img/CSGO.png')}
          players={playersCS}
          playerAmmount={5}
          onPlayerPress={(player) => navigation.navigate('Profile', {player})}
        />
        <GameCard
          gameTitle="Stardew Valley"
          imageSource={require('../assets/img/stardew.jpg')}
          players={playersStar}
          playerAmmount={4}
        />
        <GameCard
          gameTitle="Apex Legends"
          imageSource={require('../assets/img/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg')}
          players={playersApex}
          playerAmmount={3}
        />
        <GameCard
          gameTitle="Minecraft"
          imageSource={require('../assets/img/Minecraft.jpg')}
          players={playersMc}
          playerAmmount={8}
        />
      </ScrollView>
      <Footer />
    </Container>
  );
};

export default HomeView;