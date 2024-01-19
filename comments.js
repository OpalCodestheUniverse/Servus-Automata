const firebaseConfig = {
  apiKey: "AIzaSyDeC1ORaJFKaPvvAKEBwrSGF1JruRFzamI",
  authDomain: "servus-automata.firebaseapp.com",
  projectId: "servus-automata",
  storageBucket: "servus-automata.appspot.com",
  messagingSenderId: "225457163878",
  appId: "1:225457163878:web:75d902f20dec546e6127a7",
  measurementId: "G-GPVVRHNGQH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the comments collection in Firebase
const commentsRef = firebase.firestore().collection("comments");

// Function to display comments from Firebase
function displayComments() {
  commentsRef.orderBy("timestamp", "desc").onSnapshot(snapshot => {
    const commentsContainer = document.getElementById("comments-container");
    commentsContainer.innerHTML = "";

    snapshot.forEach(doc => {
      const commentData = doc.data();
      const commentElement = document.createElement("div");
      commentElement.innerHTML = `<strong>${commentData.username}</strong>: ${commentData.comment}`;
      commentsContainer.appendChild(commentElement);
    });
  });
}

// Call displayComments() to display existing comments on page load
displayComments();
