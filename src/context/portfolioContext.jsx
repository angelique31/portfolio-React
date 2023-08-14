import { createContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);

  const handleShowIntro = () => {
    setShowIntro(true);
  };

  const handleCloseIntro = () => {
    setShowIntro(false);
  };

  return (
    <PortfolioContext.Provider
      value={{ showIntro, handleShowIntro, handleCloseIntro }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
