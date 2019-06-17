import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 3,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
