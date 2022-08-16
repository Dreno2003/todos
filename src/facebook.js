
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';

// authentication imports
import { 
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithFacebook
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';


const signInWithFacebookButton = document.getElementById('signInWithFacebook');

const auth = firebase.auth();

const signInWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  auth.signInWithPopup(facebookProvider)
  .then(() => {
    window.location.assign('./todos.html');
  })
  .catch(error => {
    console.error(error);
  })
}

signInWithFacebookButton.addEventListener('click', signInWithFacebook);
