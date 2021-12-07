const handler = require('./handler');
const preHandler = require('./pre-handler');

module.exports = async (instance) => {
  instance.get(
    '/',
    {
      preHandler: [preHandler]
    },
    handler,
  );
};
