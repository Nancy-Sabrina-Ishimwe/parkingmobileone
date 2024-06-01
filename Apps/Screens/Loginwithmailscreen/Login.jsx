import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import Colors from '../../Utils/Colors';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleForgotPasswordPress = () => {
    
    console.log('Navigate to Forgot Password Screen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Glad to see you!!</Text>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        {/* Updated password input with toggle and forgot password link */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={{...styles.input, alignSelf: 'flex-end', color: 'red'}}>Show/Hide</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPasswordPress} style={{alignSelf: 'flex-end'}}>
          <Text style={{color: 'red'}}>Forgot your password?</Text>
        </TouchableOpacity>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#007bff',
  },
  subContainer: {
    width: '100%',
    height: '70%',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.PRIMARY,
  },
  heading: {
    fontSize: 30,
    fontFamily: 'Arial',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Login;