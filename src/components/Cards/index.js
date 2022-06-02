import React from 'react';
import { View,Text,Image } from 'react-native';
import Button from '../Button';
 import { 
  Container,
  ViewText,
  Title,
  TextInfo
  ,ViewInfo,
  ViewButtons,
  ButtonVerMais,
  TextButton
 } from './styles';
import loc from '../../assets/loc.png'
const Cards = () => {
  return (
    <Container>
    
      <ViewText>
        <Title>Luminaria 3</Title>    

      </ViewText>
      <ViewInfo>
        <TextInfo>Bairro:Centro</TextInfo>
        <TextInfo>Cidade: Santa RIta do Sapucai
        </TextInfo>
        <TextInfo>Tecnico: Pedro Henrique</TextInfo>
      </ViewInfo>
      <ViewButtons>
        <ButtonVerMais>
          <TextButton>
            Ver Mais
          </TextButton>
        </ButtonVerMais>
        <ButtonVerMais loc={true}>
          <TextButton>
            Localização
          </TextButton>
          <Image source={loc} 
          style={{width:20,height:20, 
            padding:12,marginLeft:5}}/>
        </ButtonVerMais>
      </ViewButtons>  
      
    </Container>
  
  )
 
}

export default Cards;