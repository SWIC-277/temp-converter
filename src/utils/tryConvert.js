const conversions = {
  toC: (f) => (f - 32) * (5 / 9),
  toF: (c) => (c * 9) / 5 + 32,
};

export function tryConvert(temperature, conversion) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = conversions[conversion](input);
  return output.toFixed(2).toString();
}
