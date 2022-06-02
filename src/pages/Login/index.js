import React from 'react';
import { View,Text } from 'react-native';

import { Container,Logo } from './styles';
import Inputs from '../../components/Inputs'
import Button from '../../components/Button'
import logo from '../../assets/logo.jpeg'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation  = useNavigation();
  return(
    <Container >
    <LinearGradient
        // Background Linear Gradient
        colors={['#E4E4E4', '#D4D4D4']}
        style={{width:'100%',height:'100%',justifyContent:'center',alignContent:'center',alignItems:'center'}}
      >
      <Logo source={logo}/>
      <Inputs label="Email"/>
      <Inputs label="Senha"/>
      <Button fullsize={true} onPress={()=>navigation.navigate('Home')}>
        Entrar
      </Button>
      </LinearGradient>
    </Container>
  ) ;
}

export default Login;