import { createContext, useContext, useState } from 'react';

const MobileMenuContext = createContext();
export const useMobileMenu = () => useContext(MobileMenuContext);

export const MobileMenuProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
