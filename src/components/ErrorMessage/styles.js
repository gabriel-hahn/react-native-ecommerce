import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  width: ${metrics.screenWidth - metrics.basePadding}px;
  position: absolute;
  top: ${Platform.OS === 'android' ? metrics.baseMargin : metrics.baseMargin + 85}px;
  left: ${metrics.baseMargin}px;
  padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
  background-color: ${colors.danger};
  font-size: 14px;
  border-radius: ${metrics.baseRadius};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Error = styled.Text`
  flex: 1;
  color: ${colors.white};
`;

export const HideButton = styled.TouchableOpacity``;

export const HideIcon = styled(Icon).attrs({
  size: 20,
  color: colors.white,
  name: 'times',
})``;
