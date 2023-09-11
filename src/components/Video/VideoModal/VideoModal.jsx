import { useEffect, useContext } from "react";
import PortfolioContext from "../../../context/portfolioContext";
import VideoSection from "../VideoSection/VideoSection";
import {
  ModalBackdrop,
  ModalContainer,
  ModalContent,
  CloseButton,
} from "./VideoModal.styled";

const VideoModal = () => {
  // const { isModalOpen, closeModal, openModal } = useContext(PortfolioContext);
  const { isVideoModalOpen, closeVideoModal } = useContext(PortfolioContext);

  //La modale apparait
  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isVideoModalOpen]);

  return (
    <div>
      {isVideoModalOpen && (
        <>
          <ModalBackdrop />
          <ModalContainer style={{ display: "block" }}>
            <ModalContent>
              <CloseButton className="close" onClick={closeVideoModal}>
                &times;
              </CloseButton>
              <VideoSection />
            </ModalContent>
          </ModalContainer>
        </>
      )}
    </div>
  );
};

export default VideoModal;
