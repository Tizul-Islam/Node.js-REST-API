import { createServer, IncomingMessage, ServerResponse } from "http";

import {routerHandler} from "./routes/routes.ts";

const server = createServer(
    (req: IncomingMessage, res: ServerResponse) => {
    routerHandler(req, res);
});

server.listen(3000, () => {   // port =3000
    console.log("Server running at port 3000");
});

