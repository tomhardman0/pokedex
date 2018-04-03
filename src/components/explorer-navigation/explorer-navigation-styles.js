import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333333'
  },
  tile: {
    width: '100%',
    height: '33.3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: '800',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 4
  }
});
