import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
  background: ${colors.lighter};
`;

export const ProductCard = styled.View`
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 300px;
`;

export const Info = styled.View`
  margin-top: ${metrics.baseMargin}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: ${colors.darker};
  font-weight: bold;
`;

export const Brand = styled.Text`
  font-size: 14px;
  color: ${colors.gray};
  margin-top: 2px;
`;

export const Price = styled.Text`
  font-size: 22px;
  color: ${colors.green};
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  margin-top: ${metrics.basePadding};
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.baseRadius};
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
