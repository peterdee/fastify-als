const { requestContext } = require('fastify-request-context');

module.exports = async (_, reply) => {
  return reply.code(200).send({
    customValue: requestContext.get('customValue'),
    stamp: requestContext.get('stamp'),
  });
};
