import * as path from "node:path";
import * as fs from "node:fs";

const filePath = path.join(process.cwd(), "src", "database", "data.json");


export const readProduct = () => {

    // console.log(filePath);

    const products = fs.readFileSync(filePath, 'utf-8');

    // console.log(JSON.parse(products));
    return JSON.parse(products);








}