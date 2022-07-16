import { createContext, useContext, useState } from 'react';

const MobileMenuContext = createContext();
export const useMobileMenu = () => useContext(MobileMenuContext);

export const MobileMenuProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log(isMobileMenuOpen);
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <MobileMenuContext.Provider
      value={{ isMobileMenuOpen, openMobileMenu, closeMobileMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
