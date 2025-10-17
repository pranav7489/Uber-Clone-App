const dotenv = require("dotenv");
dotenv.config(); // ✅ this must come before importing models or routes

const http = require("http");
const app = require("./app");
const { initializeSocket } = require("./socket");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
