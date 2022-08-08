// // var firebaseConfig = {
// //     apiKey: "AIzaSyAI1brKkR9XfOGErHdMQKyfj8GQbKR7tXA",
// //     authDomain: "to-do-list-519ae.firebaseapp.com",
// //     projectId: "to-do-list-519ae",
// //     storageBucket: "to-do-list-519ae.appspot.com",
// //     messagingSenderId: "897143349984",
// //     appId: "1:897143349984:web:e23f665d2848abc8fa2685",
// //     measurementId: "G-N6YDZCPM2S"
// // };

// // firebase.initializeApp(firebaseConfig);
// // firebase.analytics();
// // var db = firebase.firestore();

// // const firebaseConfig = {
// //     apiKey: "AIzaSyAzH4qiLafUggsmp61cdY2k3F7l1pZHmmA",
// //     authDomain: "domapplication-2fc8d.firebaseapp.com",
// //     projectId: "domapplication-2fc8d",
// //     storageBucket: "domapplication-2fc8d.appspot.com",
// //     messagingSenderId: "1072709528029",
// //     appId: "1:1072709528029:web:c62a6a77241936ced1ae34",
// //     measurementId: "G-CFS8BN8V2M"
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyD_7v1k8A14uhhfMN1h1_jwS0q7kGA_y6o",

//   authDomain: "todotest-f00fb.firebaseapp.com",

//   projectId: "todotest-f00fb",

//   storageBucket: "todotest-f00fb.appspot.com",

//   messagingSenderId: "219580056634",

//   appId: "1:219580056634:web:9e17c8611722dc05c0e103",

//   measurementId: "G-TLL2Y2M9QP"


//   };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// //   const db = getFirestore(app);
// const db = firebase.firestore();


// var firebaseConfig = {
//   apiKey: "AIzaSyD_7v1k8A14uhhfMN1h1_jwS0q7kGA_y6o",

//   authDomain: "todotest-f00fb.firebaseapp.com",

//   projectId: "todotest-f00fb",

//   storageBucket: "todotest-f00fb.appspot.com",

//   messagingSenderId: "219580056634",

//   appId: "1:219580056634:web:9e17c8611722dc05c0e103",

//   measurementId: "G-TLL2Y2M9QP"
// };

function signIn() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth.signInWithPopup(provider).then(function (result) {
    var token = result.credential.accessToken;
    // document.querySelector(#s)
  })
}