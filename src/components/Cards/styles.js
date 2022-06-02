import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  background-color: white;
  height: 220px;
  border-radius: 8px;
  margin-top: 20px;
`;
export const ViewText = styled.View`
  width: 100%;
  border-radius: 8px;
  align-items: center;
  margin-top: 10px;
`;
export const Title = styled.Text`
font-style: normal;
font-weight: 700;
font-size: 25.6px;
`;
export const TextInfo = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 18px;
margin-top: 8px;
`;
export const ViewInfo = styled.View`
  margin-left: 21px;
`;
export const ViewButtons = styled.View`
flex-direction: row;
justify-content: space-between;
margin-left: 21px;
margin-right:21px ;
margin-top: 20px;
`;

export const ButtonVerMais = styled.TouchableOpacity`
  width: auto;
  padding: 12px;
  height: 40px;
  background-color: ${(props)=>props.loc?'#FBB327':'#015486'};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

export const TextButton = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 18px;
color: white;
margin-top: 4px;
height: 25px;

`;