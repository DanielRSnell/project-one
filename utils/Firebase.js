import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDHq6hBL4-0gYdg5WQQKVgiDRUlKSEjxJ0',
	authDomain: 'react-native-for-designe-a1a8f.firebaseapp.com',
	databaseURL: 'https://react-native-for-designe-a1a8f.firebaseio.com',
	storageBucket: 'react-native-for-designe-a1a8f.appspot.com',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
