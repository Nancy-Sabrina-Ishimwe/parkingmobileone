import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import Login from './Apps/Screens/Loginwithmailscreen/Login';
import Loginnum from './Apps/Screens/Loginwithnumberscreen/Loginnum';
import Obone from './Apps/Screens/Obonescreen/Obone';
import Obtwo from './Apps/Screens/Obtwoscreen/Obtwo';
import Register from './Apps/Screens/Registerscreen/Register';
import Requestcode from './Apps/Screens/Requestcodescreen/Requestcode';
import Requestotp from './Apps/Screens/Requestotpscreen/Requestotp';
import Confirmforgot from './Apps/Screens/Confirmforgotpasswordscreen/Confirmforgot';


export default function App() {
  return (
    <>
      <Login/>
      {/* <Confirmforgot/>
      <Loginnum/>
      <Obone/>
      <Obtwo/>
      <Register/>
      <Requestcode/>
      <Requestotp/>
      <StatusBar style="auto" /> */}
    </>
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
