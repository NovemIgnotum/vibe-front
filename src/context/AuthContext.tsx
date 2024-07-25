// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";

interface AuthContextType {
  isSignup: boolean;
  toggleSignup: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  const toggleSignup = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <AuthContext.Provider value={{ isSignup, toggleSignup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
