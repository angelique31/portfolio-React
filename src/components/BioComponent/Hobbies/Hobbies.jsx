import { useTranslation } from "react-i18next";
import {
  InterestsContainer,
  InterestItem,
  LogoImage,
  InterestText,
} from "./Hobbies.styled";

import KitchenIcon from "../../../assets/Icons/hobbies/kitchen.svg";
import BookIcon from "../../../assets/Icons/hobbies/book.svg";
import HikingIcon from "../../../assets/Icons/hobbies/hiking.svg";
import VisibilityAwareContainer from "../../../pages/ProjectsDetailPage/VisibilityAwareContainer";

function Hobbies() {
  const { t } = useTranslation();
  const hobbiesIcons = [KitchenIcon, BookIcon, HikingIcon];

  return (
    <>
      <VisibilityAwareContainer>
        <InterestsContainer>
          {hobbiesIcons.map((icon, index) => (
            <InterestItem key={index}>
              <LogoImage src={icon} alt={t(`hobbies.item${index + 1}.alt`)} />
              <InterestText>{t(`hobbies.item${index + 1}.text`)}</InterestText>
            </InterestItem>
          ))}
        </InterestsContainer>
      </VisibilityAwareContainer>
    </>
  );
}

export default Hobbies;
