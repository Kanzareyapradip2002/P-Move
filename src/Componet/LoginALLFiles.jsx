import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from "../firebase";


const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // State to track if user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in when component mounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        navigate('/gotoHollywood'); // Redirect if user is already logged in
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [navigate]);

  // const signInWithEmailAndPasswordHandler = () => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(() => {
  //       alert('User logged in successfully');
  //       navigate('/gotoHollywood');
  //     })
  //     .catch((error) => {
  //       console.error('Error signing in:', error.message);
  //       // Handle specific errors here if needed
  //     });
  // };

  const signInWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(() => {
        alert('User signed in successfully');
        navigate('/gotoHollywood');
      })
      .catch((error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert('Google Account is already in use');
        } else {
          console.error('Error signing in with Google:', error.message);
        }
      });
  };

  const createUserWithEmailAndPasswordHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('User created successfully');
        navigate('/gotoHollywood');
      })
      .catch((error) => {
        console.error('Error creating user:', error.message);
        // Handle specific errors here if needed
      });
  };

  if (loggedIn) {
    return (
      <div className='Main'>
        <div className="container">
          <div className="image">
            <h1 className='text-hading'>Welcome To <span>KPA MOVIES</span></h1>
          </div>
          <div className="content">
            <h1>User already logged in!</h1>
            {/* Add any logged-in UI here */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='Main'>
        <div className="container">
          <div className="image">
            <h1>Welcome To <span>KPA MOVIES</span></h1>
          </div>
          <div className="content">
            <h1>Login</h1>
            <form>
              <div className="form-group">
                <label className='logininput' htmlFor="">Email:</label>
                <br />
                <input
                  className='logininput'
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  placeholder="Enter An Email Id"
                />
              </div>
              <div className="form-group">
                <label className='logininput' htmlFor="password">Password:</label>
                <br />
                <input
                  className='logininput'
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  required
                  placeholder="Enter A Password"
                />
              </div>
              <br />
              {/* <button onClick={signInWithEmailAndPasswordHandler} type="button" className="btn">Login</button> */}
              <button onClick={signInWithGoogle} type="button" className="btn1">Sign in With Google</button>
              <br />
              <button onClick={createUserWithEmailAndPasswordHandler} type="button" className="btn">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export { Login };
