import PropTypes from "prop-types";
import "./table.scss";

function Table({ onThLength, onTableCount }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          {onThLength(10)}
        </tr>
      </thead>
      <tbody>{onTableCount(30)}</tbody>
    </table>
  );
}

Table.propTypes = {
  onThLength: PropTypes.func.isRequired,
  onTableCount: PropTypes.func.isRequired,
};

export default Table;
