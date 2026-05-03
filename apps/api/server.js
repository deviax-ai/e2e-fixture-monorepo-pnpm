const express = require("express");
const { makeGreeting } = require("@app/shared");

const PORT = parseInt(process.env.PORT, 10) || 3001;
const SESSION_SECRET =
  process.env.SESSION_SECRET || "monorepo-api-dev-secret-change-me";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ service: "monorepo-api", secret_len: SESSION_SECRET.length });
});

app.get("/healthz", (_req, res) => {
  res.status(200).type("text/plain").send("ok");
});

app.get("/greet", (req, res) => {
  const name = (req.query.name || "world").toString();
  res.json(makeGreeting(name));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`api listening on ${PORT}`);
});
