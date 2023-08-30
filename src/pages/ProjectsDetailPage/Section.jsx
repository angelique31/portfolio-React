import { SectionTitle, TextParagraph } from "./ProjectsDetailPage.styled";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <div>
    <SectionTitle>{title}</SectionTitle>
    <TextParagraph>{children}</TextParagraph>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
