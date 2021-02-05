import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Register.css'
import google from '../Images/google-logo.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.Config"

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useState({})


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }

    const handleSign = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var { displayName, email } = result.user;
            const signedInUser = { Name: displayName, Email: email }
            setLoggedInUser(signedInUser);
            document.getElementById('name').value = signedInUser.Name;
            document.getElementById('email').value = signedInUser.Email;



            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    return (
        <div>
            <Header />
            <div className="registerForm">
                <h2>Registration</h2>

                <div className="google" onClick={handleSign}>
                    <img src={google} alt="Google logo" />
                    <label>Login With Google</label>
                </div>

                <div className="form">
                    <form>
                        <label>Name</label>
                        <div className="name">
                            <input type="text" placeholder="Your Name" id="name" required />
                            {/* <input type="text" placeholder="Last Name" required /> */}
                        </div>
                        <label>Address</label>
                        <input type="text" placeholder="Your Address" required />
                        <label>Phone Number</label>
                        <input type="text" placeholder="Phone" required />
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" id="email" required />
                        <label>Date</label>
                        <input type="date" required />
                        <textarea placeholder="Opinion" id="" cols="10" rows="3"></textarea>
                        <input type="submit" value="Submit" />

                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Register;