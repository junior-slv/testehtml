const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Adicione o domínio do Google Tag Manager (GTM) à lista de origens permitidas
const allowedOrigins = ["https://testehtml-4jx9.vercel.app", "https://www.googletagmanager.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

// Configurando o body-parser para interpretar JSON
app.use(bodyParser.json());

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
