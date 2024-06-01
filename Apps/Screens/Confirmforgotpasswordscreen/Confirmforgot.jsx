import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Linking } from 'react-native';


const Confirmforgot = () => {
  const handleOpenEmail = () => {
    Linking.openURL('mailto:support@example.com');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/images/welc.png')} style={styles.image}>
        
      </ImageBackground>
      <Text style={styles.headerText}>Check Your Email</Text>
      <Text style={styles.paragraph}>We have sent a password recover instructions to your email.</Text>
      <TouchableOpacity onPress={handleOpenEmail} style={styles.button}>
        <Text style={styles.buttonText}>Open email app</Text>
      </TouchableOpacity>
      <Text style={[styles.paragraph, { marginBottom: 30, marginTop: 10,color: 'gray' }]}>
        Skills I'll confirm later.
      </Text>
      <Text style={styles.linkText}>
        Didn't receive the email?check your spam filter{' '}
        <Text onPress={() => console.log('Create an email address')} style={styles.link}>
          Create an email address
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, 
    height: 200,
    marginBottom: 20,
    borderRadius: 100, 
    justifyContent: 'center', 
    alignItems: 'center', 
    overflow: 'hidden', 
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'darkblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  linkText: {
    marginTop: 10,
  },
  link: {
    color: 'darkblue',
  },
});

// export default function Confirmforgot() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Confirmforgot/>
//     </View>
//   );
// }
