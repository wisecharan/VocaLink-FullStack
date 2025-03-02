document.addEventListener("DOMContentLoaded", () => {
  // Select UI Elements
  const voiceAssistantIcon = document.querySelector(".voice-assistant");
  const askedText = document.querySelector(".asked-text");
  const responseText = document.querySelector(".response-text");

  // Speech Recognition Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser. Try using Google Chrome.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;

  // Handle User Speech Input
  recognition.onresult = (event) => {
    const userQuery = event.results[0][0].transcript;
    console.log("Recognized:", userQuery); // Debugging
    askedText.textContent = `You asked: "${userQuery}"`;

    // Process Query and Generate Response
    const response = getResponse(userQuery);
    responseText.textContent = `Response: "${response}"`;

    // Use Text-to-Speech for Response
    speakResponse(response);
  };

  recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
    responseText.textContent = "Error recognizing speech. Please try again.";
  };

  // Start Listening on Icon Click
  voiceAssistantIcon.addEventListener("click", () => {
    responseText.textContent = "Listening...";
    console.log("Listening..."); // Debugging
    recognition.start();
  });

  // Generate Responses Based on Query
  function getResponse(query) {
    query = query.toLowerCase();

    const responses = {
      // Personal Information
      "hello": "Hi there! How can I assist you today?",
      "who are you": "I am Vocalink, your voice assistant.",
      "name": "His name is Sai Charan Puduthala.",
      "where is he from": "Sai Charan is from India.",
      
      // Skills & Experience
      "skills": "Sai Charan is skilled in Web Development, JavaScript, React, Node.js, and more.",
      "experience": "He has over 3 years of experience in Web Development and Content Editing.",
      "programming languages": "He is proficient in JavaScript, Python, and C++.",
      "frameworks": "He has worked with React, Angular, and Express.js.",
      "certifications": "He has completed certifications in Full Stack Development and Cloud Computing.",
      
      // Projects
      "projects": "Sai Charan has worked on multiple projects, including VocaLink, an AI-powered voice assistant.",
      "tell me about vocalink": "VocaLink is a LinkedIn-style web application with an integrated voice assistant feature.",
      "github": "You can check out his projects on GitHub at github.com/wisecharan.",
      
      // Education
      "education": "He holds a Bachelor's degree in Computer Science.",
      "college": "He graduated from XYZ University.",
      
      // Hobbies & Interests
      "hobbies": "He enjoys coding, playing chess, and reading technology blogs.",
      "favorite programming language": "His favorite programming language is JavaScript.",
      
      // Contact Information
      "contact": "You can reach him via email at saicharan@example.com.",
      "linkedin": "Check out his LinkedIn profile at linkedin.com/in/saicharan.",
      
      // General Assistance
      "thank you": "You're welcome!",
      "bye": "Goodbye! Have a great day!",
      "how are you": "I'm just a voice assistant, but I'm here to help!",
    };
    
    // Match query with response
    for (const key in responses) {
      if (query.includes(key)) {
        return responses[key];
      }
    }

    return "I'm not sure how to respond to that. Please ask about Sai Charan or Vocalink.";
  }

  // Text-to-Speech Function
  function speakResponse(response) {
    const synth = window.speechSynthesis;
    if (!synth) {
      console.error("Speech Synthesis not supported.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(response);
    utterance.lang = "en-US";
    utterance.onerror = (event) => console.error("Speech Synthesis Error:", event.error);
    synth.speak(utterance);
  }
});
