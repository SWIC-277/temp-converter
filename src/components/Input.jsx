import PropTypes from "prop-types";
import capitalize from "lodash.capitalize";

export default function Input({ label, value, onChange }) {
  return (
    <div>
      <label htmlFor={label}>{capitalize(label)}</label>
      <input
        type="number"
        id={label}
        value={value}
        onChange={onChange}
        data-unit={label.slice(0, 1).toUpperCase()}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
