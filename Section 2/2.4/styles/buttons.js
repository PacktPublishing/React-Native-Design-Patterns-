import {Dimensions, Platform} from 'react-native';

const { width, height } = Dimensions.get('window');

const buttons = {
  commonButton : {
    width,
    marginTop: 10,
    borderBottomRightRadius: 4,
    borderWidth: 1,    
    borderBottomLeftRadius: 4 
  }
};

export default buttons;
