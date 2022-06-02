import React from 'react';
import { View,Text,TextInput } from 'react-native';
import styled from 'styled-components/native';
import {Container,Input} from './styles'

const Inputs = ({label}) => {
  return (
    <Container>    
      <Input placeholderTextColor="#676767" placeholder={label}/>
    </Container>
  );
}





export default Inputs;

