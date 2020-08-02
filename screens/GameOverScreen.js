import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Button,
  Image
} from 'react-native';
import BodyText from '../components/BodyText';


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/success.png')} 
          style={styles.image}
          resizeMode={'cover'} 
        />
      </View>
      <BodyText>Number was: {props.toBeGuessed}</BodyText>
      <BodyText>Computer guessed {props.toBeGuessed} after {props.roundsNumber} rounds</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
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
  }

});

export default GameOverScreen;