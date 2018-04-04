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
    textShadowRadius: 4,
    marginTop: 135
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
