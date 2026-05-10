import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../service/product.service.ts";
import { log } from "node:console";
import type { IProduct } from "../type/product.type.ts";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const urlParts = url?.split("/");
    // console.log(urlParts);
    const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
    // console.log("ID is ", id)

    if (url === "/products" && method === "GET") {

        // const products =[

        //     {

        //         id:1,
        //         name:"Product 1",
        //         price:100
        //     }
        // ];
        const products = readProduct();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "this is products router ", data: products }))
    }
    else if (method === "GET" && id !== null) { // get single product by id
        const products = readProduct();
        const product = products.find((p: IProduct) => p.id === id);
        // console.log("product is ", product);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "this is products seccessfull recive your product", data: product }))
    }

}  