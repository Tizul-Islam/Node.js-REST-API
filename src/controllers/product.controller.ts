import { request, type IncomingMessage, type ServerResponse } from "node:http";
import { addProduct, readProduct } from "../service/product.service.ts";
import type { IProduct } from "../type/product.type.ts";
import { parseBody } from "../utility/parseBody.ts";
import { sendResponse } from "../utility/sendRespons.ts";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split("/");

  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  

  //get all product
  if (url === "/products" && method === "GET") {
    try {
      const products = readProduct();
      return sendResponse(
        res,
        200,
        true,
        "Products fetched successfully",
        products,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "something went wrong", error);
    }

    // get all product by id
  } else if (method === "GET" && id !== null) {
    try {
      // get single product by id
      const products = readProduct();
      const product = products.find((p: IProduct) => p.id === id);
      
      if (!product) {
        return sendResponse(res, 404, false, "Product not found!");
      }

      return sendResponse(
        res,
        200,
        true,
        "Product retrieved successfully",
        product,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }

    // add new product
  } else if (method === "POST" && url === "/products") {
    try {
      const body = await parseBody(req);
      const products = readProduct();
      const newProduct = {
        id: Date.now(),
        ...body,
      };
      products.push(newProduct);
      
      addProduct(products);
      
      return sendResponse(
        res,
        201,
        true,
        "Product added successfully",
        newProduct,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  }
  //// update product
  else if (method === "PUT" && id !== null) {
    try {
      const body = await parseBody(req);
      const products = readProduct();
      const index = products.findIndex((p: IProduct) => p.id === id);

      if (index < 0) {
        return sendResponse(res, 404, false, "Product not found!");
      }

      products[index] = {
        id: products[index].id,
        ...body,
      };

      addProduct(products);

      return sendResponse(
        res,
        200,
        true,
        "Product updated successfully",
        products[index],
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }

    //Delete product
  } else if (method === "DELETE" && id !== null) {
    try {
      const products = readProduct();
      const index = products.findIndex((p: IProduct) => p.id === id);

      if (index < 0) {
        return sendResponse(res, 404, false, "Product not found!");
      }

      products.splice(index, 1);

      addProduct(products); // Persist changes to database

      return sendResponse(
        res,
        200,
        true,
        "Product deleted successfully",
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  }
};
