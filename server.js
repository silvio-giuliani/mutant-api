const express = require("express");
const routes = require("./routes/index.js");
const PORT = process.env.port || 3000;

const app = express();
app.use("/", routes);

app.listen(PORT, () => {
  console.log("server is running on port 3000.");
});
