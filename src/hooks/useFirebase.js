import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // create user
  const signupWithEmailAndPassword = (
    name,
    photoURL,
    history,
    location,
    email,
    password
  ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = {
          displayName: name,
          email: result.email,
          photoURL,
        };
        saveUser(name, email, photoURL, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        setCurrentUser(user);
        const destination = location.state?.from || "/";
        history.replace(destination);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // sign in
  const logInWithEmailAndPassword = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setCurrentUser(result.user);
        setError("");
        const destination = location.state?.from || "/";
        history.replace(destination);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // sign in with Google
  const signInWithGoogle = (history, location) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setCurrentUser(result.user);
        saveUser(
          result.user.displayName,
          result.user.email,
          result.user.photoURL,
          "PUT"
        );
        setError("");
        const destination = location.state?.from || "/";
        history.replace(destination);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // observer function
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setError(null);
      } else {
        setCurrentUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  //[currentUser?.email]);

  // sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // save user to data base
  const saveUser = (name, email, photoURL, method) => {
    const user = {
      username: name,
      email,
      photoURL,
    };
    fetch("https://protected-eyrie-86885.herokuapp.com/users", {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return {
    currentUser,
    error,
    isLoading,
    signupWithEmailAndPassword,
    signInWithGoogle,
    logInWithEmailAndPassword,
    logOut,
  };
};

export default useFirebase;
