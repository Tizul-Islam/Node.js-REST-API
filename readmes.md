src folder create korob 
server.ts file create korob 
 
install

package.json file // npm init -y
JavaScript-এর typed version // npm i -D typescript @types/node
tsconfig.json // npx tsc --init
.ts file directly run //npm i tsx

package .env file 
PORT=3000
npm install dotenv



package.json // add korbe 
{
  "type": "module",
  "dev": "node --watch src/server.ts",  // file run korar   jonno 
}

tsconfig.json // add korbe 

{
  "compilerOptions": {

    "rootDir": "./src",
    "outDir": "./dist",
    "target": "esnext",
    "module": "esnext",
    "types": ["node"], //node use kora jonno
  
  }
} 