import { createContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isFormVisible, setIsFormVisible] = useState(true);

  const handleShowIntro = () => {
    setShowIntro(true);
  };

  const handleCloseIntro = () => {
    setShowIntro(false);
  };

  const openModal = () => {
    console.log("Mise à jour de isModalOpen à true");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Mise à jour de isModalOpen à false");
    setIsModalOpen(false);
  };

  return (
    <PortfolioContext.Provider
      value={{
        showIntro,
        handleShowIntro,
        handleCloseIntro,
        isModalOpen,
        openModal,
        closeModal,
        // setIsFormVisible,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
