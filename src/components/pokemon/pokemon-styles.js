import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333333'
  },
  cont: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageCont: {
    height: '40%'
  },
  image: {
    resizeMode: 'contain',
    width: '60%'
  },
  contentCont: {
    height: '60%',
    backgroundColor: '#ffffff'
  }
});
