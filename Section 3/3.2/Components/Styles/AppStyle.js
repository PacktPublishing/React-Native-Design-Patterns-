import { StyleSheet } from 'react-native';
import { Buttons, Colors, Metrics } from '../../Styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.background
  },
  label: {
    fontSize: 20, 
    alignItems: 'center',
    textAlign: 'center',
    margin: 10
  },
  input: {
    borderColor: Colors.commonBorderColor,
    borderWidth: 1,
    width: Metrics.screenWidth,
    height: 45
  },
  fancyButton: {
    ...Buttons.commonButton,
    backgroundColor: Colors.buttonColor,
    borderColor: Colors.commonBorderColor
  },
  loginButton: {
    ...Buttons.commonButton,
    backgroundColor: 'gray',
    borderColor: 'lightblue'
  }
});
