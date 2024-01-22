import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');
  const [isSignUpScreen, setIsSignUpScreen] = useState(false);

  const onPressLogin = () => {
    if (state.email !== '' && state.password !== '') {
      setLoginStatus('You are in');
    } else {
      setLoginStatus('Incorrect username/password');
    }
    setModalVisible(true);
  };

  const onPressForgotPassword = () => {
    // For the forgot password operation
  };

  const onPressSignUp = () => {
    setIsSignUpScreen(true);
  };

  const onPressCloseSignUp = () => {
    setIsSignUpScreen(false);
  };

  const onPressConfirmSignUp = () => {
    if (signupState.username !== '' && signupState.email !== '' && signupState.password !== '') {
      setLoginStatus('Login using the credentials you have input in signup');
    } else {
      setLoginStatus('All input fields must be filled');
    }
    setModalVisible(true);
  };

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [signupState, setSignupState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const closeModal = () => {
    setModalVisible(false);
  };

  if (isSignUpScreen) {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Signup Form</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#006400"
            onChangeText={(text) => setSignupState({ ...signupState, username: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#006400"
            onChangeText={(text) => setSignupState({ ...signupState, email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#006400"
            onChangeText={(text) => setSignupState({ ...signupState, password: text })}
          />
        </View>
        <TouchableOpacity onPress={onPressConfirmSignUp} style={styles.signupBtn}>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressCloseSignUp} style={styles.backBtn}>
          <Text style={styles.backBtnText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Pawpal Hub</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#006400"
          onChangeText={(text) => setState({ ...state, email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#006400"
          onChangeText={(text) => setState({ ...state, password: text })}
        />
      </View>
      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Login </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp} style={styles.signupBtn}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{loginStatus}</Text>
          <TouchableOpacity onPress={closeModal} style={styles.modalBtn}>
            <Text style={styles.modalBtnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90E4C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4CAF50',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#4CAF50',
  },
  forgotAndSignUpText: {
    color: '#4CAF50',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  signupBtn: {
    width: '80%',
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: '#FFFFFF',
  },
  signupText: {
    color: '#FFFFFF',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#4CAF50',
  },
  modalBtn: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  modalBtnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
