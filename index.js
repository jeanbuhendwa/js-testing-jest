const stringLength = (str) => {
  if (str.length === 0) {
    throw new Error("The string cannot be empty");
  }
  if (str.length > 10) {
    throw new Error("The string is too long");
  }
  return true;
};

module.exports = stringLength;
