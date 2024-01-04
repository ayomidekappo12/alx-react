import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class BodySection extends Component {
  render() {
    return (
      <div className={`bodySection ${css(styles.BodySectionOverflow)}`}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  BodySectionOverflow: {
    overflow: "auto",
  },
});

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySection;
