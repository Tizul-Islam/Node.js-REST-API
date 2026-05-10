src folder create korob 
server.ts file create korob 
 
install

npm init -y
npm i -D typescript @types/node
npx tsc --init
npm i tsx



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