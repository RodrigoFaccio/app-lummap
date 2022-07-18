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
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Cards = ({item}) => {
  const navigation = useNavigation()
  console.log('ITEM',item)
  return (
    <Container>
    
      <ViewText>
        <Title>Luminaria 3</Title>    

      </ViewText>
      <ViewInfo>
        <TextInfo>Bairro:{ item.bairro}</TextInfo>
        <TextInfo>Cidade: {item.cidade}
        </TextInfo>
        <TextInfo>Tecnico: Pedro Henrique</TextInfo>
      </ViewInfo>
      <ViewButtons>
        <ButtonVerMais onPress={()=>navigation.navigate('VerMais',{item})}>
          <TextButton>
            Ver Mais
          </TextButton>
        </ButtonVerMais>
        <ButtonVerMais loc={true} onPress={() => navigation.navigate('Maps', {
          'latitude': item.latitude,
          'longitude':item.longitude
        })}>
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