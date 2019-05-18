import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyDlrqn_dzmtzk7wiNFQIfIEdaihh3ojQD0",
	authDomain: "codespecks.firebaseapp.com",
	databaseURL: "https://codespecks.firebaseio.com",
	projectId: "codespecks",
	storageBucket: "codespecks.appspot.com",
	messagingSenderId: "135652430988"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;

/**
 * Firestore is a NoSQL database
 * Deals with collections and document
 * Collection of documents that belond together
 * 
 * In this project, one collection will be a snippet
 * in that collection we'd have a series of diff documents
 * which would be one snippet.
 * The document is an object of key/value pairs 
 * - title, id, content, authorID etc.
 * 
 * We'll also have a users collection and a notifications collection
 */