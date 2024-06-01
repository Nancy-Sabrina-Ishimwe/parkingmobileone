import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';


const Register = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = () => {
    if (password!== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);

    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
  };


  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let's Start!!</Text>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
          style={styles.input}
        />
        {/* Updated password input with toggle */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={{...styles.input, alignSelf: 'flex-end'}}>Show/Hide</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
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

export default Register;
