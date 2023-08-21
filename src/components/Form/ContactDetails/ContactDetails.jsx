import {
  Aside,
  ContactInfoBox,
  Box,
  LogoImage,
  AddressText,
} from "./ContactDetails.styled";

import SignsPosts from "../../../assets/Icons/signsPosts.svg";
import Phone from "../../../assets/Icons/phone.svg";
import Envelope from "../../../assets/Icons/envelope.svg";

export const ContactDetails = () => {
  return (
    <Aside>
      <ContactInfoBox>
        <Box>
          <LogoImage
            className="signs-posts"
            src={SignsPosts}
            alt="signs posts Logo"
          />
          <AddressText>25 rue Jean Moulin, 31600 Muret</AddressText>
        </Box>
        <Box>
          <LogoImage className="phone" src={Phone} alt="Phone Logo" />
          <p>06.24.63.85.08</p>
        </Box>
        <Box>
          <LogoImage className="Envelope" src={Envelope} alt="Envelope Logo" />
          <p>
            <a href="mailto:angie1979.capucine@yahoo.fr">
              pro.rosin.angel@gmail.com
            </a>
          </p>
        </Box>
      </ContactInfoBox>
    </Aside>
  );
};

export default ContactDetails;
