const { requestContext } = require('fastify-request-context');

module.exports = async () => {
  const delay = Math.random();

  await new Promise((resolve) => setTimeout(resolve, delay));

  requestContext.set('customValue', delay);
  return;
};
