import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define a TypeScript interface for the context
interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
  }

// Create the context with an initial value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define props for the provider component
interface AuthProviderProps {
  children: ReactNode;
}

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component that will provide the context value
export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token') || null);

  // Update localStorage whenever the token changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  // Login function to set the token
  const login = (userToken: string) => {
    setToken(userToken);
  };

  // Logout function to clear the token
  const logout = () => {
    setToken(null);
  };

  const value : AuthContextType = {
    token, 
    login,
    logout,
  }

  // Ensure that the return value is valid JSX (a ReactElement)
  //@ts-ignore
  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
};

