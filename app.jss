// app.js

// Paste your Firebase configuration here
const firebaseConfig = {
    apiKey: "AIzaSyDeC1ORaJFKaPvvAKEBwrSGF1JruRFzamI",
    authDomain: "servus-automata.firebaseapp.com",
    projectId: "servus-automata",
    storageBucket: "servus-automata.appspot.com",
    messagingSenderId: "225457163878",
    appId: "1:225457163878:web:75d902f20dec546e6127a7",
    measurementId: "G-GPVVRHNGQH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firestore database
const db = firebase.firestore();

// Function to submit a comment
function submitComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        // Add the comment to Firestore
        db.collection('comments section').add({
            text: commentText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function (docRef) {
            console.log("Comment written with ID: ", docRef.id);
            // Clear the input field
            commentInput.value = '';
        })
        .catch(function (error) {
            console.error("Error adding comment: ", error);
        });
    }
}

// Function to display comments
function displayComments() {
    const commentsContainer = document.getElementById('comments-container');

    // Listen for changes to the 'comments section' collection
    db.collection('comments section').orderBy('timestamp', 'desc').onSnapshot(function (snapshot) {
        commentsContainer.innerHTML = ''; // Clear previous comments

        snapshot.forEach(function (doc) {
            const commentData = doc.data();
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = '<p>' + commentData.text + '</p>';
            commentsContainer.appendChild(commentElement);
        });
    });
}

