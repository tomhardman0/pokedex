import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc2229',
  },
  listItem: {
    width: '50%',
    height: 200,
  },
  tileContainer: {
    width: '100%',
    height: '100%'
  },
  tileImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 200,
    width: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
    margin: 10,
  }
});
