import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333'
  },
  listItem: {
    width: '50%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  tileContainer: {
    position: 'absolute',
    width: '80%',
    height: '80%'
  },
  tileText: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: '800',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 6,
    marginTop: 135
  },
  fire: {
    backgroundColor: '#fd7d24'
  },
  normal: {
    backgroundColor: '#a4acaf'
  },
  fighting: {
    backgroundColor: '#d56723'
  },
  flying: {
    backgroundColor: '#3dc7ef'
  },
  poison: {
    backgroundColor: '#b97fc9'
  },
  ground: {
    backgroundColor: '#ab9842'
  },
  rock: {
    backgroundColor: '#f366b9'
  },
  bug: {
    backgroundColor: '#729f3f'
  },
  ghost: {
    backgroundColor: '#7b62a3'
  },
  steel: {
    backgroundColor: '#9eb7b8'
  },
  water: {
    backgroundColor: '#4592c4'
  },
  grass: {
    backgroundColor: '#9bcc50'
  },
  electric: {
    backgroundColor: '#eed535'
  },
  psychic: {
    backgroundColor: '#f366b9'
  },
  ice: {
    backgroundColor: '#51c4e7'
  },
  dragon: {
    backgroundColor: '#f16e57'
  },
  dark: {
    backgroundColor: '#707070'
  },
  fairy: {
    backgroundColor: '#fdb9e9'
  },
  unknown: {
    backgroundColor: '#fd7d24'
  },
  shadow: {
    backgroundColor: '#fd7d24'
  },
  tileImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 100,
    width: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
    margin: 10,
  }
});
