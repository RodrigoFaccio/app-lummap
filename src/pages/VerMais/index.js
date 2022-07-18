import React from 'react';
import { View,Text } from 'react-native';

import { Container,Texts,ViewLado } from './styles';

const VerMais = ({ route }) => {
  const { item } = route.params
  console.log(item)
  return (
     <Container>
      <Texts>
        Latitude:{item.latitude}

      </Texts>
      <Texts>
        Latitude:{item.longitude}

      </Texts>
      <ViewLado>
         <Texts>
         minima:30

        </Texts>
         <Texts>
            maxima:100

      </Texts>
      </ViewLado>
      <ViewLado>
         <Texts>
         Consumo:30

        </Texts>
         <Texts>
            Potencia:100

      </Texts>
      </ViewLado>
      <Texts>
        Vida util:100
      </Texts>
     </Container>
  )
}

export default VerMais;