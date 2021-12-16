import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = React.createContext<any>({});

type IUserData = {
  children: any;
};
type data = {
  username: string;
  password: string;
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: any }) => {
  const [currenntUser, setCurrentUser] = useState();
  const auth = getAuth();

<<<<<<< HEAD
  const Signup: React.FC<data> = ({ username, password }) => {
    return auth.createUserWithEmailAndPassword(username, password);
=======
  const signup = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    console.log({ username, password });
    // createUserWithEmailAndPassword(auth, username, password).then(
    //   (userCredential) => {
    //     return userCredential;
    //   }
    // );

    // return auth.createUserWithEmailAndPassword(username, password);
>>>>>>> 6d55b86a5be1b96fef5428d3957441286dfcac34
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value: any = {
    currenntUser,
    signup,
  };

  return (
    <AuthContext.Provider value={{ hello: "sample" }}>
      {children}
    </AuthContext.Provider>
  );
};
