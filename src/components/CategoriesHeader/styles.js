import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  display: flex;
  background-color: ${colors.primary};
`;

export const CategoryBar = styled.View`
  height: 54px;
  background-color: ${colors.secondary};
  display: flex;
  justify-content: center;
`;

export const CategoriesList = styled.FlatList`
  padding: 0 ${metrics.basePadding}px;
`;

export const Category = styled.TouchableOpacity`
  margin-right: 30px;
  justify-content: center;
  padding-top: ${({ active }) => (active ? 5 : 0)}px;
  border-bottom-width: ${({ active }) => (active ? 5 : 0)};
  border-color: ${colors.white};
`;

export const Title = styled.Text`
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;
`;
