import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333333'
  },
  imageCont: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '55%'
  },
  image: {
    resizeMode: 'contain',
    width: '80%'
  }
});
