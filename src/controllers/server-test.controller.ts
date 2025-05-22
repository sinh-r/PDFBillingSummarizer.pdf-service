import { FastifyRequest, FastifyReply } from "fastify";

export class ServerTestController {
  static async root(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    return reply.status(200).send({ hello: "world" });
  }

  static async healthCheck(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    reply.send({ status: "ok" });
  }

  static async echo(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { body } = request;
    if (!body) {
      return reply.status(400).send({ error: "No body provided" });
    }
    return reply.status(200).send({
      message: "Echoing back the body",
      body,
    });
  }
}