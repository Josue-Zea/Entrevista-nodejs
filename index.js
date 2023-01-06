const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");

const server = http.createServer(app);
const variables = require("./config/confijg.js");
const port = variables.SERVER_PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/interview.route.js'));

app.get("/", (req, res) => {
  res.send({
      "mensaje": `Servidor en puerto ${port}`
  });
});

server.listen( port, async() => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app
