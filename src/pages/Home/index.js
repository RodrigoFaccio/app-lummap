import React,{ useEffect, useState} from 'react';
import { View,ScrollView } from 'react-native';
import Cards from '../../components/Cards';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../services/api';
import axios from 'axios';

// import { Container } from './styles';

const Home = () => {

  const [orders,setOrders] = useState([])
  const [load,setLoad] = useState(true)


  useEffect(() => {
    async function requestOrders(){

      try {
        const {data} = await fetch('http://localhost:5006/listarProtocolo', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTQxMDQ1MjIsImV4cCI6MTY1NDE5MDkyMiwic3ViIjoiMTEyIn0.45p7Z2SOVsV3_UiZe9MgZ0prglwyrnz3L3qnDV48pY4' 
          }
        })
  
        console.log(data)
      } catch (error) {
        console.log(error)
      }
     
    }

    requestOrders()
  
   
  }, []);
  return <LinearGradient
  // Background Linear Gradient
  colors={['#E4E4E4', '#D4D4D4']}
  style={{width:'100%',height:'100%',justifyContent:'center',alignContent:'center',alignItems:'center'}}
>
<ScrollView style={{width:'100%',marginLeft:'10%',marginTop:50}}>
<Cards/>
<Cards/>
<Cards/>
</ScrollView>


</LinearGradient>
}

export default Home;