import express from "express";
import morgan from "morgan";

import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

if (app.get("env") !== "production") {
  app.use(morgan("dev"));
}

// default route handler
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
