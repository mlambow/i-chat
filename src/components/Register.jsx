import React from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { storage, auth, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react'
import { doc, setDoc } from "firebase/firestore" 


function Register() {

  const [error, setError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

  //  await createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   console.log(user)
  // })

    
      const res = await createUserWithEmailAndPassword(auth, email, password)
      
      const storageRef = await ref(storage, displayName);

      const uploadTask = await uploadBytesResumable(storageRef, file);

      // uploadTask.on(
      //   (error) => {
      //     setError(true)
      //   }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL 
            })
            //  await db.collection('users').doc(res.user.uid).set({
            //   uid: res.user.uid,
            //   displayName,
            //   email,
            //   photoURL: downloadURL
            // });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: displayName,
              email,
              photoURL: downloadURL
            })

            // await setDoc(doc(db, "userChat", res.user.uid), {})
          });
        }
      // );
      
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>!-chat</span>
          <span className='title'>Register</span>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='display name' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
          <input type='file' style={{display:'none'}} id='file' /> 
          <label htmlFor='file'>
            <span>image</span> Add avatar
          </label>
          <button>Sign Up</button> 
          {error && <span>{error}</span>}
          </form>
           <p>You do have an account? Login </p>   
        </div>
    </div>
  )
}

export default Register