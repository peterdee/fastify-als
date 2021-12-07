const fastify = require('fastify');

const hook = require('./hook');
const router = require('./router');

const app = fastify({
  logger: true,
});

app.addHook('onRequest', hook);

app.register(router);

app.listen(6111);
