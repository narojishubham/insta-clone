import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebaseConfig";

const AuthContext = React.createContext();

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

export const AuthProvider: React.FC<IUserData> = ({ children }) => {
  const [currenntUser, setCurrentUser] = useState();

  const Signup: React.FC<data> = ({ username, password }) => {
    return auth.createUserWithEmailAndPassword(username, password);
  };
  useEffect(() => {
    // firebase func
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currenntUser,
    Signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
