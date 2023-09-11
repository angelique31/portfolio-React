import { createContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);
  //Modale du formulaire de contact
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Modale de la video
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
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
        isVideoModalOpen,
        openVideoModal,
        closeVideoModal,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
