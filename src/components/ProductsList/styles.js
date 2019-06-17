import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  background: ${colors.lighter};
`;

export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: metrics.basePadding,
    paddingBottom: metrics.basePadding,
  },
  columnWrapperStyle: {
    marginHorizontal: metrics.basePadding,
    justifyContent: 'space-between',
  },
})``;

export const ProductItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: ${(metrics.screenWidth - 50) / 2}px;
  margin-top: ${metrics.baseMargin}px;
  padding: ${metrics.baseMargin}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 180px;
`;

export const Name = styled.Text`
  margin-top: ${metrics.baseMargin}px;
  font-size: 16px;
  color: ${colors.darker};
  font-weight: bold;
`;

export const Brand = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
  margin-top: 2px;
`;

export const Price = styled.Text`
  font-size: 14px;
  color: ${colors.green};
  font-weight: bold;
  margin-top: ${metrics.baseMargin / 2};
`;
