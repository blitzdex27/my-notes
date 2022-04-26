const { performance } = require("perf_hooks");

function timer(wrappedFunction) {
  return new Promise((resolve, reject) => {
    const t0 = performance.now() / 1000;

    const wrappedFunctionVal = wrappedFunction();

    const t1 = performance.now() / 1000;

    const toReturn = {};
    toReturn.value = wrappedFunctionVal;
    toReturn.performance = t1 - t0;
    resolve(toReturn);
  });
}

module.exports = timer;
