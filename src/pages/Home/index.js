import React,{ useEffect, useState,useContext} from 'react';
import { View,ScrollView,Text,Modal,TouchableOpacity,FlatList } from 'react-native';
import Cards from '../../components/Cards';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../services/api';
import axios from 'axios';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';

// import { Container } from './styles';

const Home = () => {
  const { signed, user,signIn,signOut } = useContext(AuthContext);

  const [orders,setOrders] = useState([])
  const [load,setLoad] = useState(true)
const [modalVisible, setModalVisible] = useState(true)

const renderItem = ({ item }) => (
  <Cards item={item} key={item.id}  />
);
console.log(user.data.token)
  useEffect(() => {
    async function requestOrders(){

      try {
        const {data} = await api.get('/listarProtocolo', {
          headers: {
            'Authorization': 'Bearer '+user.data.token 
          }
        })
  
        console.log(data.data)
        setOrders(data.data)
      } catch (error) {
        console.log(error)
      }
     
    }

    requestOrders()
  
   
  }, []);
  return <LinearGradient
  // Background Linear Gradient
  colors={['#E4E4E4', '#D4D4D4']}
  style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}
  >
   

      
  <FlatList
  data={orders}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  style={{width:'100%',marginLeft:'10%'}}
/>

    

      


</LinearGradient>
}

export default Home;