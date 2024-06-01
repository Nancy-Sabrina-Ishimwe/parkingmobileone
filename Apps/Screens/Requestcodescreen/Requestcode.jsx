import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';




const Requestcode = () => {
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = () => {
    console.log('Submitted OTP:', otp);
    // Implement OTP submission logic here
    setOtp(''); // Clear OTP input
  };

  const handleScanLinkPress = () => {
    Linking.openURL('https://example.com/scanning-url'); // Replace with your actual scanning URL
    console.log('Scanning QR Code...');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/car2.png')} // Replace with the path to your image
        style={styles.image}
      />
      <Text style={styles.boldText}>Enter Passcode</Text>
      <Text style={styles.description}>
        We have sent the OTP to your registered email. Please enter the OTP below.
      </Text>
      <Text style={styles.codeInfo}>Where to see that code given:</Text>
      <Text style={styles.scanInstructions}>Where to add your finger to scan:</Text>
      <TouchableOpacity style={styles.scanLink} onPress={handleScanLinkPress}>
        <Text style={styles.linkText}>Scan QR Code</Text>
      </TouchableOpacity>
      <Text style={styles.securityText}>Verify for easy security.</Text>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={(text) => setOtp(text)}
        keyboardType="number-pad"
        maxLength={6}
        style={styles.input}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleOtpSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
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
  image: {
    width: 200, // Adjust size as needed
    height: 200, // Adjust size as needed
    marginBottom: 20,
    alignSelf: 'center',
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  codeInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  scanInstructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  scanLink: {
    backgroundColor: 'transparent',
    textDecorationLine: 'underline',
    color: 'blue',
    marginBottom: 10,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: 'red',
  },
  securityText: {
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
  submitButton: {
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

export default Requestcode;
