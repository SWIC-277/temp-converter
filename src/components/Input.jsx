import PropTypes from "prop-types";

export default function Input({ label, value, handleChange }) {
  return (
    <div>
      <label className="sr-only" htmlFor={label}>
        {label}
      </label>
      <input type="number" id={label} value={value} onChange={handleChange} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
