# «Node-express-server»

## _Implementation features:_

Node.js server with implementation using the Express.js framework.
Interaction with the Postgres database is carried out through Prisma (ORM).

## _The project implements the "Publication" entity._

## _The following queries were created:_

- [GET] _Request to get all "Publication" entities from the database_

- [GET] _Request to obtain a specific entity from the database by its "id"_

- [CREATE] _Request to create the entity "Publication" in the database with the properties "id", "createdAt", "updatedAt", "title", "description"_

- [PUT] _Request to update entity properties by "id" in the database_

- [DELETE] _Request to delete an entity by "id" from the database_

---

## _Testing:_

Added unit tests (Jest) for testing CREATE and PUT requests

---

## _Used stack:_

- [V] Express.js
- [V] Typescript
- [V] Ts-node-dev
- [V] Prisma
- [V] Helmet
- [V] Morgan
- [V] Zod
- [V] Dotenv
- [V] Compression
- [V] Jest
- [V] Supertest

---

## _Database:_

- [V] PostgreSQL

---

## _Compiles and minifies for production:_

- pnpm run build
- npm run build

---

## _Getting started online development server:_

- pnpm run dev
- npm run dev

---

## _Running unit tests:_

- pnpm run test
- npm run test
