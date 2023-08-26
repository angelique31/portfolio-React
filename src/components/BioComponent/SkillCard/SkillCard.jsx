import { useRef } from "react";
import { CardContainer, CardFront, CardBack } from "./SkillCard.styled";

// function SkillCard({ skill, description }) {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <CardContainer $flipped={flipped} onClick={() => setFlipped(!flipped)}>
//       <CardFront>{skill}</CardFront>
//       <CardBack>{description}</CardBack>
//     </CardContainer>
//   );
// }

// export default SkillCard;

function SkillCard({ skill, description }) {
  const cardRef = useRef(null);

  const handleCardClick = () => {
    if (cardRef.current) {
      const currentRotation = cardRef.current.style.transform;
      cardRef.current.style.transform =
        currentRotation === "rotateY(180deg)"
          ? "rotateY(0deg)"
          : "rotateY(180deg)";
    }
  };

  return (
    <CardContainer ref={cardRef} onClick={handleCardClick}>
      <CardFront>{skill}</CardFront>
      <CardBack>{description}</CardBack>
    </CardContainer>
  );
}

export default SkillCard;
