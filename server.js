// Απαιτήσεις
require('dotenv').config(); // Φόρτωσε τις μεταβλητές περιβάλλοντος από το αρχείο .env
const express = require('express');
const cors = require('cors');
const app = express();

// Ρύθμιση CORS
const corsOptions = {
  origin: [
    'http://localhost:3000', // Τοπικό frontend
    'http://localhost:8080', // Τοπικό backend
    'https://frantzitheodora.github.io/frontend-repo/', // Παραγωγή frontend
    'https://backend-repo-production-cb1a.up.railway.app/' // Παραγωγή backend
  ],
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true // Αν χρειάζεται να στείλεις cookies
};
app.use(cors());

// Route για το root '/'
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!!!');
});

// Route για το '/api/data'
app.get('/api/data', (req, res) => {
  res.json({
    "name": "FRANTZI THEODORA",
    "jobTitle": "ANDROID - WEB DEVELOPER",
    "diploma": "Diploma in IT - DATALABS",
    "phone": "6976989318",
    "email": "frantzi1991@gmail.com",
    "location": "THESSALONIKI, GREECE",
    "github": "https://github.com/FRANTZITHEODORA",
    "linkedin": "https://www.linkedin.com/in/theodora-frantzi/",
    "codeLink": "https://drive.google.com/file/d/1rJPLnjJuLCqgI8goPye-9rH1jQNJ2F5l/view",
    "image": "https://via.placeholder.com/150",
    "skills": {
      "Web Development": ["HTML", "CSS", "Node.js", "JavaScript", "PHP", "Kotlin", "Python", "Java", "C#", "Wordpress", "WooCommerce", "Android Studio"],
      "UX/UI Design": ["Figma", "Photoshop", "Illustrator", "React", "JSON", "XML"],
      "Other Skills": ["Canva", "ERP Systems (Singular, Pylon, Galaxy)", "Digital Marketing (Google Ads, Meta Business Suite, Social Media)", "Language: English"]
    },
    "studies": [
      {
        "degree": "Diploma in IT",
        "institution": "DATALABS"
      },
      {
        "degree": "Library and Information Systems",
        "institution": "DIPAE"
      }
    ],
    "bio": `I am a Web Developer, with a great willingness to work and implement more projects. For the last two years, I have been working as an android developer (Android studio). I mainly work in Kotlin, however I really like to work with Java as well. I have experience in web services, in data management and presentation with rest api and less with soap requests (json & xml). Also, I'm pretty well versed in the Firebase Console environment and be able to set up the backend of an app, as well. I'm currently trying to train myself in Spring Boot and learn to build Rest Services. This is a React app, witch uses an api I created with Node.js. I love web services and the functionality they offer to my applications. When I started working as an Android developer, I didn't need to create them, only use them. However, whenever I use something, I really like to know how it is created as well, and that's why I decided to learn how to build them myself.  `
  });
});

// Χρήση δυναμικού port από το Heroku ή 8080 για τοπική ανάπτυξη
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('NODE_ENV:', process.env.NODE_ENV); // Έλεγχος NODE_ENV
});
