import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import Colors from '../../Utils/Colors';



export default function Obtwo() {
  const handleOpenEmail = () => {
    
  };

  const handleOpenPhone = () => {

  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./../../../assets/images/car2.png')} style={styles.loginImage} />
      <Text style={styles.headerText}>Hollaaa</Text>
      <View style={styles.menuIconContainer}> {/* Wrap Ionicons in a View */}
        <Text style={styles.paragraph}>Find the best possible parking space nearby your desire destination.</Text>
        <Ionicons name="ellipsis-horizontal" size={24} color="red" /> {/* Updated to show three dots */}
      </View>
      <TouchableOpacity onPress={handleOpenEmail} style={styles.emailButton}>
        <Text style={styles.buttonText}>Login with Email</Text>
        <Ionicons name="mail-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenPhone} style={styles.phoneButton}>
        <Text style={styles.buttonText}>Login with Number</Text>
        <Ionicons name="call-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ marginTop: 20, color: 'red' }}>Didn't you have an account? Then proceed with
       <Text onPress={() => Linking.openURL('https://example.com/signup')} style={{ color: 'red', textDecorationLine: 'underline' }}>sign up</Text>.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 150,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
    backgroundColor: Colors.PRIMARY,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuIconContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20, 
  },
  paragraph: {
    marginBottom: 20,
  },
  emailButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'darkblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  phoneButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f0ad4e', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    marginRight: 10, 
  },
  linkText: {
    marginTop: 10,
  },
  link: {
    color: 'darkblue',
  },
});
