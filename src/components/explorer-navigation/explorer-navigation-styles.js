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
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  tileText: {
    fontSize: 80,
    color: '#ffffff',
    fontWeight: '800'
  },
  tileImageCont: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  tileImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  },
  tileImageLayer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
});
