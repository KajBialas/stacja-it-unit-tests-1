export const checkTypes = (a, b, desiredType, errorMsg) => {
  if (typeof a !== desiredType || typeof b !== desiredType) {
    return errorMsg;
  }
};