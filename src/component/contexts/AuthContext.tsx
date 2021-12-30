import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = React.createContext<any>({});

// old code

// type IUserData = {
//   children: any;
//   username: string;
//   password: string;
// };

// old code

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
    // old code

    // createUserWithEmailAndPassword(auth, username, password).then(
    //   (userCredential) => {
    //     return userCredential;
    //   }
    // );
    // return auth.createUserWithEmailAndPassword(username, password);

    // old code
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// import React, { useContext, useEffect, useState } from "react";
// import { auth } from "../../firebase/firebaseConfig";
// const AuthContext = React.createContext<any>({});

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export const AuthProvider: React.FC = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();

//   function signup(email: any, password: any) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChange((user: any) => {
//       setCurrentUser(user);
//     });
//     return unsubscribe
//   }, []);

//   const value = {
//     currentUser,
//     signup
//   };

//   return (
//     // the value will store info we want to provide for authentication
//     <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
//   );
// };
