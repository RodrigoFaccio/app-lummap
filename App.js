import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import LinearGradient from 'react-native-linear-gradient';
import Home from './src/pages/Home';
import Routes from './src/Routes'
export default function App() {
  return (
    
   <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
