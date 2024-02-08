import React from 'react';
import { View, Text, StyleSheet, Image, Modal, KeyboardAvoidingView, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import ChatbotScreen from './ChatbotScreen';

const App = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [loginStatus, setLoginStatus] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Pawpal Hub</Text>

      <ChatbotScreen />

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{loginStatus}</Text>
          <TouchableOpacity onPress={closeModal} style={styles.modalBtn}>
            <Text style={styles.modalBtnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
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

