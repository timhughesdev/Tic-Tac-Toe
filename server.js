const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// const path = require("path");

// app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname, "client", "index.html");
}); // Express.js is not able to render the static css and JS file from public folder using sendFile. Use middleware express.static method

app.listen(port, () => {
  console.log(`Port is listening on: ${port}`);
});
