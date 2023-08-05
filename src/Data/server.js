import jsonServer from "json-server";
import { isAuthorized } from "./isAuthorized.js";

const server = jsonServer.create();
const router = jsonServer.router("./src/data/db.json");
const middlewares = jsonServer.defaults({ readOnly: true, static: "./public" });
const PORT = 3001;

server.use(middlewares);
server.use(isAuthorized);
server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
