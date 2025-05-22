import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyHelmet from "@fastify/helmet";
import serverTestRoute from "./routes/server-test.route";

const app = fastify({
  logger: true, });

app.register(fastifyCors, {
  origin: "*",});
app.register(fastifyHelmet);
app.register(serverTestRoute);

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    app.log.info(`Server listening on ${app.server.address()}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();