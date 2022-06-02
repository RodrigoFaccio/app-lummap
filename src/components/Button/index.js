import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { Children } from 'react/cjs/react.production.min';
import styled from 'styled-components/native';
import { Container,Label } from './styles';

const Button = ({children,fullsize,...rest}) => {
  return (
    <Container fullsize={fullsize} {...rest}>
      <Label>
        {children}
      </Label>
    </Container>
  );
}



export default Button;