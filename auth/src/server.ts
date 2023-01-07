import express from "express";

const app = express();
const hostname = "127.0.0.1";
const port = 3000;

// default route handler
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
