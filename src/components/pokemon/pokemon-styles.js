import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  imageCont: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '54%'
  },
  image: {
    resizeMode: 'contain',
    width: '80%'
  },
  name: {
    position: 'relative',
    top: -12,
    fontSize: 32,
    color: '#ffffff',
    textAlign: 'center'
  }
});
