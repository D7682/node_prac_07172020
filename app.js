const express = require("express");
const app = express();
const path = require("path");

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

//HBS
app.set("view engine", "hbs");

//routes
app.use("/", require("./routes/index"));
app.use("/api", require("./routes/api"));

app.listen(5000, () => {
  console.log("Server Started On Port 5000");
});
