import { createServer, IncomingMessage, ServerResponse } from "http";

import {routerHandler} from "./routes/routes.ts";
import config from "./config/index.ts";

const server = createServer(
    (req: IncomingMessage, res: ServerResponse) => {
    routerHandler(req, res);
});

server.listen(config.port, () => {   // port =3000
    console.log(`Server running at port ${config.port}`);
});

