import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleSendPress = () => {
    console.log('Sending reset password email to:', email);
    // Implement the logic to send the reset password email here
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./path/to/leftArrow.png')} // Replace with the path to your left arrow image
        style={styles.arrow}
      />
      <Text style={styles.heading}>Forgot password</Text>
      <Text style={styles.boldText}>Reset password</Text>
      <Text style={styles.twoLineText}>We will send a password reset link to your email.</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  arrow: {
    width: 24, // Adjust size as needed
    height: 24, // Adjust size as needed
    marginRight: 8,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  twoLineText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ForgotPasswordScreen;
