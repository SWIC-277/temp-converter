import PropTypes from "prop-types";
import capitalize from "lodash.capitalize";

export default function Input({ label, value, onChange }) {
  return (
    <div className="w-min">
      <label htmlFor={label}>{capitalize(label)}</label>
      <input
        type="number"
        id={label}
        value={value}
        onChange={onChange}
        data-unit={label.slice(0, 1).toUpperCase()}
        className="w-32 border px-1 mt-1"
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
