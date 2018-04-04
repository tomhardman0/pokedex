import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  listItemCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },
  listItemNumberWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 76,
    height: '100%'
  },
  listItemNumber: {
    color: 'rgba(0, 0, 0, 0.7)'
  },
  listItem: {
    width: '100%',
    fontSize: 20,
    paddingLeft: 76
  },
  typeCircleWrappers: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingRight: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  typeCircle: {
    borderRadius: 25,
    backgroundColor: '#999999',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  typeCircleText: {
    color: '#ffffff'
  }
});
