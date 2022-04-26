function wrapper(unwrappedFunc) {
  return function (...args) {
    return function () {
      return unwrappedFunc(...args);
    };
  };
}

module.exports = wrapper