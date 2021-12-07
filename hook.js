const store = require('./store');

module.exports = async () => {
  store.enterWith({
    stamp: Date.now(),
  });
};
