import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { handleChatbotLogic } from './ChatbotLogic';

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef();

  const handleSend = async () => {
    const userMessage = message.toLowerCase();
    const chatbotResponse = await handleChatbotLogic(userMessage);

    const updatedMessages = [
      { text: chatbotResponse, sender: 'chatbot' },
      { text: message, sender: 'user' },
      ...messages,
    ];

    setMessages(updatedMessages);
    setMessage('');
  };

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.slice(0).reverse().map((message, index) => ( // Reverse order
          <View key={index} style={[styles.message, message.sender === 'user' ? styles.userMessage : styles.chatbotMessage]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  messagesContainer: {
    flexGrow: 1,
    width: '100%',
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#8FED92',
  },
  chatbotMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#8FED92',
  },
  messageText: {
    color: '#006400',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  inputText: {
    flex: 1,
    height: 40,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendBtn: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  sendText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ChatbotScreen;
