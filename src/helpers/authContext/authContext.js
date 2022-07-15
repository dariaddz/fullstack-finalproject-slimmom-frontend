import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [active, setActive] = useState('signIn');

  const onClickSignIn = () => {
    setActive('signIn');
  };

  const onClickRegister = () => {
    setActive('register');
  };

  return (
    <AuthContext.Provider value={{ active, onClickSignIn, onClickRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
