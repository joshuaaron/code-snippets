import firebase from 'firebase/app';  // core functionality
import 'firebase/firestore'; // database
import 'firebase/auth'; // for working with authentication

// Initialize Firebase
const config = {
	apiKey: "AIzaSyDlrqn_dzmtzk7wiNFQIfIEdaihh3ojQD0",  // our project can identify which project on the backend to connect to
	authDomain: "codespecks.firebaseapp.com", // 
	databaseURL: "https://codespecks.firebaseio.com",
	projectId: "codespecks",
	storageBucket: "codespecks.appspot.com",
	messagingSenderId: "135652430988"
};

firebase.initializeApp(config);
firebase.firestore(); // initialize firestore database

export default firebase;

/**
 * Firestore is a NoSQL database
 * Deals with collections and document
 * Collection of documents that belong together
 * 
 * In this project, one collection will be a snippet
 * in that collection we'd have a series of diff documents
 * which would be one snippet.
 * The document is an object of key/value pairs 
 * - title, id, content, authorID etc.
 * 
 * We'll also have a users collection and a notifications collection
 */