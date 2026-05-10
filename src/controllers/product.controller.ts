import type { IncomingMessage, ServerResponse } from "node:http";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;





    if (url?.startsWith("/products") && method === "GET") {


        const products =[

            {

                id:1,
                name:"Product 1",
                price:100
            }
        ] 

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "this is products router ",data:products }))
    }

}  