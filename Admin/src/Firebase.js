import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB7lDh13-Jz88kVSP7KBRDv7Sdq8hKkA4w',
  authDomain: 'netflix-clone-c0a65.firebaseapp.com',
  projectId: 'netflix-clone-c0a65',
  storageBucket: 'netflix-clone-c0a65.appspot.com',
  messagingSenderId: '1097209866061',
  appId: '1:1097209866061:web:3b3fdf1858e0645769f904',
  measurementId: 'G-0071FBZVNT',
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export default storage
