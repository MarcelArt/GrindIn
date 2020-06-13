import React from 'react';
import {Container, Header, Left, Button, Icon, Right, Text} from 'native-base';
import {Image, StyleSheet, View} from 'react-native';
import ProgressBar from '../components/ProgressBar';

const ProfileView = ({navigation, route}) => {
  const {player} = route.params;
  return (
    <Container style={{backgroundColor: '#393e46'}}>
      <Header style={{backgroundColor: '#222831'}}>
        <Left>
          <Button transparent onPress={() => navigation.pop()}>
            <Icon name="ios-arrow-back" type="Ionicons" />
          </Button>
        </Left>
        <Right>
          <Button transparent>
            <Icon name="dots-three-horizontal" type="Entypo" />
          </Button>
        </Right>
      </Header>
      <View style={styles.banner}>
        {/* <Image source="" style={styles.banner} /> */}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image source={player.avatar} style={styles.avatar} />
        <View style={styles.levelBar}>
          <Text style={{color: '#eee', marginVertical: 10}}>Level</Text>
          <ProgressBar xp={100} nextLvl={500} />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#32e0c4',
    width: '100%',
    height: 100,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    marginLeft: 20,
    marginTop: -50,
  },
  levelBar: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
});

export default ProfileView;
