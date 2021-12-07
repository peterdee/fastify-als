const fastify = require('fastify');
const { fastifyRequestContextPlugin } = require('fastify-request-context');

const hook = require('./hook');
const router = require('./router');

const app = fastify({
  logger: true,
});

app.register(fastifyRequestContextPlugin, { 
  defaultStoreValues: {
    stamp: null,
    customValue: null,
  },
});
app.addHook('onRequest', hook);

app.register(router);

app.listen(6111);
