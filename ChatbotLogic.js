// ChatbotLogic.js
import fetch from 'node-fetch';

export const handleChatbotLogic = async (userMessage) => {
  const lowercasedMessage = userMessage.toLowerCase();

  // Check if the user's message contains greetings
  if (lowercasedMessage.includes('hello') || lowercasedMessage.includes('hi') || lowercasedMessage.includes('hey')) {
    return 'Chatbot: Hello! How can I help you?';
  }

  // Check if the user's message contains a specific dog breed
  let targetBreed = extractTargetBreed(lowercasedMessage);

  // If a dog breed is mentioned, extract information from the PDF
  if (targetBreed) {
    return await handleBreedInformation(targetBreed);
  }

  // If the user's message contains only the name of a breed, extract information
  const breedNameOnly = extractBreedNameOnly(lowercasedMessage);
  if (breedNameOnly) {
    return await handleBreedInformation(breedNameOnly);
  }

  // Default response if the user's message does not contain a specific dog breed
  return "Chatbot: I'm sorry, I don't understand. Can you please try again?";
};

const fetchTextFile = async (textFileUrl) => {
  try {
    const response = await fetch(textFileUrl);
    const pdfText = await response.text();
    return pdfText;
  } catch (error) {
    console.error('Error fetching text file:', error);
    return null;
  }
};

const extractTargetBreed = (userMessage) => {
  // Implement logic to extract the specific dog breed from the user's message
  const match = userMessage.match(/(?:\bis\b|\bwant\s*to\s*know\s*about\b|\bprovide\s*information\s*of\b|\bwhat\s*is\b)\s+(\b[a-z]+(?:-[a-z]+)*\b)\s*(?:\bdog\b|\bbreed\b)?\s*$/i);
  return match ? match[1] : null;
};

const extractBreedNameOnly = (userMessage) => {
  // Implement logic to extract only the name of the dog breed from the user's message
  const match = userMessage.match(/\b([a-z]+(?:-[a-z]+)*)\b/i);
  return match ? match[1] : null;
};

const processExtractedText = (text, targetBreed) => {
  const lowercasedTargetBreed = targetBreed.toLowerCase();
  const breedInfoSentences = [];
  let foundBreed = false;

  for (const line of text.split(/\n/)) {
    const lowercasedLine = line.toLowerCase();

    if (lowercasedLine.includes(lowercasedTargetBreed)) {
      foundBreed = true;
      breedInfoSentences.push(line.trim());
    } else if (foundBreed && line.trim().length === 0) {
      // Stop processing once an empty line is encountered after finding the breed's information
      break;
    } else if (foundBreed) {
      breedInfoSentences.push(line.trim());
    }
  }

  return breedInfoSentences.length > 0 ? breedInfoSentences.join('\n') : null;
};

const handleBreedInformation = async (breedName) => {
  // Fetch and process text file
  const textFileUrl = 'https://github.com/QuennieTorralba/CPE176P_GROUP-3/raw/main/Dog%20Breeds%20of%20the%20World_BOOK.txt';
  const pdfText = await fetchTextFile(textFileUrl);

  if (pdfText) {
    // Extract breed information
    const breedInfo = processExtractedText(pdfText, breedName);
    if (breedInfo) {
      return `Chatbot: Information about ${breedName}:\n${breedInfo}`;
    } else {
      return `Chatbot: No information found about ${breedName} in the text file.`;
    }
  } else {
    return `Chatbot: Unable to fetch information about ${breedName}. Please try again later.`;
  }
};
