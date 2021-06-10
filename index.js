const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/css", express.static(path.join(__dirname, "public/css")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => console.log("port running"));
