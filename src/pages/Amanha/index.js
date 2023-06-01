import React,{ useEffect, useState} from 'react';
import { View,ScrollView,Text,StyleSheet } from 'react-native';
import Cards from '../../components/Cards';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../services/api';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
// import { Container } from './styles';
import { useNavigation,useIsFocused } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
const isFocused = useIsFocused();
  const [lista, setLista] = useState([])
  const [date, setDate] = useState()

  



  useEffect(() => {
    
    async function requestOrders() {

      try {

       
        const listarSaidaAmanha = await api.get('listar_amanha')

        const arrComPrioridade = listarSaidaAmanha.data.result.map(item=>{
          return{
            name:item.name,
            accommodation:item.accommodation,
            web:item.web,
          prioridade:false,
          renovacao:false
          }
        })
        
        const listarEntradaAmanha = await api.get('/listar_entrada_amanha');

        const listarAmanhaRenovacao = listarEntradaAmanha.data.result.map(item=>{
          return{
            name:item.name,

            accommodation:item.accommodation,
            web:item.web,
            renovacao:item.web==='Renovacao-MidStay' || item.web ==='Renovacao'?true:false
          }
        })
      

        const novaListaPrioridade = arrComPrioridade.map(obj1 => {
          const objetoEncontrado = listarAmanhaRenovacao.find(obj2 => obj1.accommodation === obj2.accommodation);
          if (objetoEncontrado) {
            return { ...obj1, prioridade: true,renovacao:objetoEncontrado.renovacao };
          }
          return{ ...obj1, prioridade: false,renovacao:obj1.renovacao}
        });

       const novaLista = novaListaPrioridade.map(item=>{
        return{
          name:item.name,

          accommodation:item.accommodation,
          web:item.web,
          renovacao:item.renovacao,
          prioridade:item.prioridade
        }
       })  
       const groupedData = novaLista.reduce((result, obj) => {
        const foundGroup = result.find(group => group.name === obj.name);
        if (foundGroup) {
          foundGroup.items.push(obj);
        } else {
          result.push({ name: obj.name, items: [obj] });
        }
        return result;
      }, []);
  
      setLista(groupedData)


      } catch (error) {
        console.log(error)
      }
     
    }

    requestOrders()
function formatarData(data) {
  data.setDate(data.getDate() + 1); // Adiciona mais um dia à data

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

const dataAtual = new Date();
const dataFormatada = formatarData(dataAtual);
  setDate(dataFormatada)
   
  }, [isFocused]);

  return (
    
    <View style={styles.container}>
    <ScrollView style={{ width: '80%',  marginTop: 50 }}>
        <View style={styles.divTitle}>
         <Ionicons name="arrow-back" size={24} color="black"  onPress={()=>navigation.navigate('Home')}   />
          <Text style={styles.title}>
       {date}
          </Text>
          
        <Ionicons name="arrow-forward" size={24} color="black"/>
        </View>
        {
          
          lista.map(item => (
          <View>
            <Text style={styles.title}>{item.name}</Text>
             {
              item.items.map(item2=>{
                if(item2.renovacao===false &&item2.web!=='Renovacao'){
                  return(
                    <Text style={item2.prioridade ? styles.textTrue : styles.textFalse}>{item2.accommodation}</Text>
                  )
                }
              })
             }
            
              
            </View>
          ))
        }
    </ScrollView>
    </View>
  );
    


};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    textAlign:'center'

    
  },
  title: {
    fontSize: 30,

    marginBottom: 20,
  },

  textFalse: {
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 20,
    marginLeft:20
      
    
    
  },
  textTrue: {
    fontSize: 16,
    backgroundColor: 'red',
    marginBottom: 20,
    marginLeft:20
    
  },
  title: {
    fontSize: 20,
  },
  divTitle: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection:'row'
  }
 
  
});
export default Home;