const store = require('./store');

module.exports = async (_, reply) => {
  return reply.code(200).send(store.getStore());
};
