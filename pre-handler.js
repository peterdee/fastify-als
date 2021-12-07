const store = require('./store');

module.exports = async (_, reply) => {
  const delay = Math.random();

  await new Promise((resolve) => setTimeout(resolve, delay));

  const oldStore = store.getStore();
  store.enterWith({
    ...oldStore,
    customValue: delay,
  });
  return;
};
