// import { useTranslation } from "react-i18next";
import { VideoContainer } from "./VideoSection.styled";
// import video from "../../../public/assets/video/tutorial.mp4"
const VideoSection = () => {
  //   const { t } = useTranslation();

  return (
    <VideoContainer>
      <video controls>
        <source
          src="../../../public/assets/video/tutorial.mp4"
          type="video/mp4"
        />
        {/* {t("video.notSupported")} */}
        Votre navigateur ne prend pas en charge la vidéo
      </video>
    </VideoContainer>
  );
};

export default VideoSection;
