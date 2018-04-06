import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  cont: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  statBlock: {
    height: '50%',
    width: '33.3%',
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tileTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 12,
    opacity: 0.8
  },
  tileNum: {
    fontSize: 44,
    paddingTop: 10
  }
});
