import React,{useContext} from 'react';
import { Image,ProgressViewIOSBase,Text,View } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Maps from '../components/Maps';
import VerMais from '../pages/VerMais';
import { MaterialIcons } from '@expo/vector-icons';
import AuthContext, { AuthProvider } from '../Context/AuthProvider/LoginContext';

const TabStack = createStackNavigator();

const Tab = () => {
const { signed, user,signIn,signOut } = useContext(AuthContext);
  return (
    <TabStack.Navigator  screenOptions={{
            headerStyle:{
               borderBottomColor:'grey',
               borderBottomWidth:0.5,
               

            }
            
            
        }}>

      <TabStack.Screen name="Home" component={Home}
       options={{ 
          headerTitle: (props) => ( // App Logo
            <View style={{
              width:'100%',
            flexDirection:'row',
            justifyContent:'flex-end',
           }}>
            
            <MaterialIcons onPress={()=>signOut()} name="logout" size={24} color="black" />
          
            </View>
           
         ),
         
         }}
      />
      <TabStack.Screen name="Maps" component={Maps} />
    <TabStack.Screen name="VerMais"  component={VerMais} />
      
      
        











    </TabStack.Navigator>
  );
};

export default Tab;
