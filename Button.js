import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    return <button>something</button>;
  }
}

Button.propTypes = {
  /** some comment here, not working */
  theme: PropTypes.string.isRequired
};

Button.defaultProps = {
  theme: "whatever"
};

export default Button;
