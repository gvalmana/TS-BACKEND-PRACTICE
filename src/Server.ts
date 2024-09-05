import { createServer, IncomingMessage, ServerResponse } from "http";

export class Server {
  constructor() {}
  public startServer() {
    createServer((req: IncomingMessage, res: ServerResponse) => {
      console.log(
        `Get Request from ${req.headers["user-agent"]} for ${req.url}`
      );
      res.write("Hello from TS Server!");
      res.end();
    }).listen(8080);
    console.log("Server started");
  }
}
