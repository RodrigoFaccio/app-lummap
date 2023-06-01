
import React, { createContext, useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator
 
} from "react-native";

const AuthContext = createContext({ signed: false, user: {} });

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    

    async function signIn() {
       
   console.log('entrou')


    }

    async function signOut() {
		AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }
	if(loading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#666" />

        </View>
    );
}

    return (
        <AuthContext.Provider value={{ signed: !! user, user, signIn, signOut, loading }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;