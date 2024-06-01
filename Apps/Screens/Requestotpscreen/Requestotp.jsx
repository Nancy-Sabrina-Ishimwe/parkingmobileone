import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';



const Requestotp = () => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60); // Timer for resend OTP
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer]);

  const handleResendPress = () => {
    setTimer(60); // Reset timer
    setResendDisabled(true); // Disable resend button temporarily
    // Implement resend OTP logic here
  };

  const handleOtpSubmit = () => {
    console.log('Submitted OTP:', otp);
    // Implement OTP submission logic here
    setOtp(''); // Clear OTP input
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/car3.png')} // Replace with the path to your left arrow image
        style={styles.arrow}
      />
      <Text style={styles.heading}>OTP Verification</Text>
      <Text style={styles.description}>
        Please check your email for the OTP. Enter the OTP below and submit.
      </Text>
      <FlatList
        data={['123456']}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <TextInput
            value={item}
            editable={false}
            style={[styles.codeItem, { marginVertical: 4 }]}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.codesContainer}
      />
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={(text) => setOtp(text)}
        keyboardType="number-pad"
        maxLength={6}
        style={styles.input}
      />
      <TouchableOpacity disabled={resendDisabled} style={styles.resendButton} onPress={handleResendPress}>
        <Text style={styles.buttonText}>{timer === 0? 'Resend OTP' : `${timer}s remaining`}</Text>
      </TouchableOpacity>
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
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  codesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeItem: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
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
  resendButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
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

export default Requestotp;
