import styled from 'styled-components/native';

export const Container = styled.View`
  background: #f19d9d;
`;

export const Categories = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin: 16px;
`;

export const Category = styled.TouchableOpacity``;

export const CategoryText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${props => (props.current ? '#fff' : '#f5bcbc')};
`;
