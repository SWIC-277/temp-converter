import capitalize from "lodash.capitalize";
import PropTypes from "prop-types";

export default function Input({ label, value, handleChange }) {
  return (
    <div className="w-min">
      <label htmlFor={label}>{capitalize(label)}</label>
      <input
        type="number"
        id={label}
        value={value}
        onChange={handleChange}
        data-unit={label.slice(0, 1).toUpperCase()}
        className="w-32 border px-1 mt-1"
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleChange: PropTypes.func.isRequired,
};
