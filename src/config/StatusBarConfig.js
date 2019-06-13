import { StatusBar, Platform } from 'react-native';

StatusBar.setBarStyle('light-content');

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('#FF9696');
}
