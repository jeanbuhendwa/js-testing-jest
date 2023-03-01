const stringLength = (str) => {
  if (str.length === 0) {
    throw new Error("The string cannot be empty");
  }
  if (str.length > 10) {
    throw new Error("The string cannot be longer than 10");
  }
  return str.length;
};

module.exports = stringLength;
