# Instruments REST API

## Setup

Create a new Typescript / Express project
TODO: Add MongoDB code examples

Initialize node, install dependencies, and configure settings
```bash
mkdir instruments
cd instruments
git init

npm init -y
npm i -D typescript ts-node nodemon @types/express @types/cors
npm i express cors mongodb dotenv

npx tsc --init
```

Create project files and directories
```bash
mkdir src
touch src/index.ts
touch src/db.ts

mkdir src/models
touch src/models/.keep

mkdir src/routes
touch src/routes/.keep

mkdir src/controllers
touch src/controllers/.keep

touch .env
```

Add `.env` and `node_modules` to .gitignore:
```ignore
# in .gitignire

.env
node_modules/
```

Add npm scripts to package.json:
```json
{
  //
  "scripts": {
  "start": "ts-node src/index.ts", 
  "start:dev": "nodemon src/index.ts"
  }
  //
}
```

Make initial commit
```bash
git add .
git commit -m 'Initial commit'
```