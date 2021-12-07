const { requestContext } = require('fastify-request-context');

module.exports = async () => {
  requestContext.set('stamp', Date.now());
};
