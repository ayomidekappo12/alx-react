import React from "react";
import PropTypes from "prop-types";

const rowStyle = { backgroundColor: "#f5f5f5ab" };
const rowHeaderStyle = { backgroundColor: "#deb5b545" };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr style={isHeader ? rowHeaderStyle : rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
