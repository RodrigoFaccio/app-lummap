import React,{useState,useContext} from 'react';
import { View,Text,Modal,KeyboardAvoidingView } from 'react-native';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';
import { Container,Logo } from './styles';
import Inputs from '../../components/Inputs'
import Button from '../../components/Button'
import logo from '../../assets/logo.jpeg'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const Login = () => {
  const { signed, user,signIn } = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha,setSenha] = useState('')

  async function Login() {
    const {data} = await  api.post('/login',{
      "usuarioName":"teste",
      "senha":"teste"
    })
    console.log(data)
    if (data.message === 'usuario autenticado com sucesso') {
      signIn(data)
      
    }

  }
  return (
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container >
        
    <LinearGradient
        // Background Linear Gradient
        colors={['#E4E4E4', '#D4D4D4']}
        style={{width:'100%',height:'100%',justifyContent:'center',alignContent:'center',alignItems:'center'}}
      >
      <Logo source={logo}/>
        <Inputs label="Email" value={email} onPress={(e)=>setEmail(e.target.value) }/>
      <Inputs label="Senha" value={senha} onPress={(e)=>setSenha(e.target.value) }/>
      <Button fullsize={true} onPress={()=>Login()}>
        Entrar
      </Button>
      </LinearGradient>
      </Container>
      </KeyboardAvoidingView>
  ) ;
}

export default Login;