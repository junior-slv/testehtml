const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const allowedOrigin = "https://webhook.site/23cac3f8-33fe-43bd-aceb-cf29b7e781dd";

const corsOptions = {
  origin: allowedOrigin,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  console.log(req.body);
  res.send("Hello, this is the /api route using GET!");
});

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send("Hello, this is the /api route using POST!");
});

app.put("/api", (req, res) => {
  console.log(req.body);
  res.send("Hello, this is the /api route using PUT!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
