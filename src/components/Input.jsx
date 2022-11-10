import PropTypes from "prop-types";
import capitalize from "lodash.capitalize";

export default function Input({ label, value, handleChange }) {
  return (
    <div>
      <label htmlFor={label}>{capitalize(label)}</label>
      <input type="number" id={label} value={value} onChange={handleChange} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
