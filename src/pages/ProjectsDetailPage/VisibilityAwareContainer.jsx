import UseVisibilityEffect from "../../components/ScrollAwareComponents/UseVisibilityEffect";
import PropTypes from "prop-types";

const VisibilityAwareContainer = ({ children }) => {
  const containerRef = UseVisibilityEffect();
  return <div ref={containerRef}>{children}</div>;
};

VisibilityAwareContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VisibilityAwareContainer;
