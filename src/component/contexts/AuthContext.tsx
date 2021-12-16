import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currenntUser, setCurrentUser] = useState();
  const value = {
    currenntUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
