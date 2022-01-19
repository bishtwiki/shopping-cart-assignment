import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAl6YgnSfcLxFgLkOXB9HforVAOjPpGw6E",
  authDomain: "sabkabazar-a8392.firebaseapp.com",
  projectId: "sabkabazar-a8392",
  storageBucket: "sabkabazar-a8392.appspot.com",
  messagingSenderId: "1095475100723",
  appId: "1:1095475100723:web:386315b737db889de6b746",
  measurementId: "G-4RQC24NP7M"
};

export const createUserProfileDocument = async (userAuth,additionaldata)=>
{
   
    if(!userAuth) return ;

    const userRef= firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();
   if(!snapshot.exists)
    {
     const {displayName,email} =userAuth
        const createdAt =new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionaldata
                 })
        }
        catch (error) {
            console.log('error creating user',error.message)

        }

    }
 return userRef;
}
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export const auth= firebase.auth();
 export const firestore =firebase.firestore()

 export default firebase;