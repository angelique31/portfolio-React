import {
  InterestsContainer,
  InterestItem,
  LogoImage,
  InterestText,
} from "./Hobbies.styled";

import KitchenIcon from "../../../assets/Icons/hobbies/kitchen.svg";
import BookIcon from "../../../assets/Icons/hobbies/book.svg";
import HikingIcon from "../../../assets/Icons/hobbies/hiking.svg";

function Hobbies() {
  return (
    <>
      <InterestsContainer>
        <InterestItem>
          <LogoImage src={KitchenIcon} alt="kitchen Logo" />
          <InterestText>Cuisine</InterestText>
        </InterestItem>
        <InterestItem>
          <LogoImage src={BookIcon} alt="kitchen Logo" />
          <InterestText>Lecture</InterestText>
        </InterestItem>
        <InterestItem>
          <LogoImage src={HikingIcon} alt="kitchen Logo" />
          <InterestText>Randonnée</InterestText>
        </InterestItem>
      </InterestsContainer>
    </>
  );
}

export default Hobbies;
