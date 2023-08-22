import { createContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowIntro = () => {
    setShowIntro(true);
  };

  const handleCloseIntro = () => {
    setShowIntro(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
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
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
