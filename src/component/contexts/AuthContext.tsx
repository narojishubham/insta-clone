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
  username: string;
  password: string;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: any }) => {
  const [currenntUser, setCurrentUser] = useState();
  const auth = getAuth();

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
