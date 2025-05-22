import { FastifyInstance } from "fastify";
import { ServerTestController } from "../controllers/server-test.controller";

export default async function serverTestRoute(app: FastifyInstance) {
    app.get("/", ServerTestController.root);
    app.get("/health", ServerTestController.healthCheck);
    app.post("/echo", 
        { 
            schema: {
                body: {
                    type: "object",
                },
            },
        }, 
        ServerTestController.echo
    );

    
}