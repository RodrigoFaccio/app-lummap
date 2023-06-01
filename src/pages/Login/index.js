import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/auth';
import api from '../../services/api';
import Button from '../../components/Button';
import logo from '../../assets/logo.jpeg';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [document, setDocument] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (email === '' || document === '') {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    } else {
      try {
     	const response  = await api.post('/login',{
        email,
        document
        });
        console.log(response.data)

        if (response.data.result[0].name !== '') {
      navigation.navigate('Home');
          
        }


    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
    }
    
  };

  return (
   
      <View style={styles.container}>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={document}
          onChangeText={setDocument}
          secureTextEntry
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Button onPress={handleLogin} fullsize>
          Entrar
        </Button>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
 
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius:8
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
