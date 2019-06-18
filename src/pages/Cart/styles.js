import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background: ${colors.lighter};
`;

export const CartList = styled.FlatList`
  padding: ${metrics.basePadding}px;
`;

export const CartItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding}px;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 60px;
  height: 80px;
`;

export const Info = styled.View`
  flex: 1;
  margin: 0 ${metrics.baseMargin}px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: ${colors.dark};
  font-weight: bold;
`;

export const Brand = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
  margin-top: 2px;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${colors.green};
  font-weight: bold;
  margin-top: ${metrics.baseMargin / 2}px;
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AmountInput = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
})`
  width: 45px;
  height: 30px;
  padding: 0 ${metrics.baseMargin}px;
  padding-left: ${metrics.baseMargin}px;
  border-width: 1px;
  border-color: ${colors.gray};
  border-radius: ${metrics.baseRadius}px;
  font-weight: bold;
  color: ${colors.regular};
`;

export const DeleteButton = styled.TouchableOpacity`
  margin-left: ${metrics.baseMargin}px;
`;

export const DeleteIcon = styled(Icon).attrs({
  size: 20,
  color: colors.regular,
  name: 'times',
})``;

export const EmptyMessage = styled.Text`
  margin-top: ${metrics.baseMargin * 2};
  font-size: 16px;
  text-align: center;
  color: ${colors.dark};
  font-weight: bold;
`;

export const SubTotal = styled.View`
  height: 110px;
  background-color: ${colors.white};
  border-top-width: 3px;
  border-color: ${colors.lighter};
  align-items: center;
  justify-content: center;
`;

export const SubTotalText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.gray};
`;

export const SubTotalPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.green};
  margin-top: ${metrics.baseMargin}px;
`;
