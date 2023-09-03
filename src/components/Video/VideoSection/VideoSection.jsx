import { VideoContainer } from "./VideoSection.styled";

const VideoSection = () => {
  return (
    <VideoContainer>
      <video controls>
        <source src="/assets/video/tutorial.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo
      </video>
    </VideoContainer>
  );
};

export default VideoSection;
