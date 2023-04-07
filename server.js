import Express from "express";
import http from "http";
import startSocketServer from "./socket.js";

const app = Express();
const server = http.createServer(app);
const port = 3001;

app.use("/", Express.static("client"));

//check to see if the server is sending/receiving
app.get("/ping", (req, res) => {
  res.status(200).json({ ping: "Pong!" });
});

server.listen(port, () => {
  console.log(`Server is listening on: ${port}`);
});

// -----Previous Implementation of Express Server-----//
// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3001;
// // const path = require("path");

// app.use(express.static("client"));

// // app.get("/", (req, res) => {
// //   res.sendFile(__dirname, "client");
// // }); // Express.js is not able to render the static css and JS file from public folder using sendFile. Use middleware express.static method

// app.listen(port, () => {
//   console.log(`Port is listening on: ${port}`);
// });
