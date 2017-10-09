export default (falseWord) => {
  let retBool;
  switch (falseWord) {
    case ' not':
      retBool = true;
      break;
    default:
      retBool = false;
  }
  return retBool;
};
