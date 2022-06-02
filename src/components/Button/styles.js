import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
height: 60px;

width: ${(props)=>props.fullsize?'90%':'auto'};

background: #015486;
border-radius: 8px;
justify-content: center;
align-items: center;
`;
export const Label = styled.Text`
  line-height: 30px;


color: #FFFFFF;
font-size: 25.6px;
`;
