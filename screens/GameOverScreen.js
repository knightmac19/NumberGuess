import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Button,
  Image
} from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image 
          fadeDuration={500}
          source={require('../assets/success.png')} 
          style={styles.image}
          resizeMode={'cover'} 
        />
      </View>
      <BodyText>Number was: <Text style={styles.highlight}>{props.toBeGuessed}</Text></BodyText>
      <BodyText>Computer guessed <Text style={styles.highlight}>{props.toBeGuessed}</Text> after {props.roundsNumber} rounds</BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },

  image: {
    borderRadius: 150,
    width: '100%',
    height: '100%',
  },

  highlight: {
    color: Colors.primary,

  },

});

export default GameOverScreen;