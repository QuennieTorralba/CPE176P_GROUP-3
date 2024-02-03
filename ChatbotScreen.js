import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const keywords = ['hello', 'hi', 'hey'];

  const handleSend = () => {
    const userMessage = message.toLowerCase();
    let chatbotResponse = '';
    if (keywords.some(keyword => userMessage.includes(keyword))) {
      chatbotResponse = 'Chatbot: Hello! How can I help you?';
    } else {
      chatbotResponse = 'Chatbot: I\'m sorry, I don\'t understand. Can you please try again?';
    }

    const updatedMessages = [
      ...messages,
      { text: message, sender: 'user' },
      { text: chatbotResponse, sender: 'chatbot' },
    ];

    setMessages(updatedMessages);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View key={index} style={[styles.message, message.sender === 'user' ? styles.userMessage : styles.chatbotMessage]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Type a message"
          placeholderTextColor="#8FED92"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendBtn}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  messagesContainer:{
    flex: 1,
    width: '100%',
    maxHeight: '80%',
    overflow: 'scroll',
  },
  message:{
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage:{
    alignSelf: 'flex-end',
    backgroundColor: '#8FED92',
  },
  chatbotMessage:{
    alignSelf: 'flex-start',
    backgroundColor: '#8FED92',
  },
  messageText:{
    color: '#006400',
    fontSize: 16,
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  inputText:{
    flex: 1,
    height: 40,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendBtn:{
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  sendText:{
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ChatbotScreen;
