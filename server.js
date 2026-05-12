const express = require("express");

const app = express();

app.use(express.static(__dirname));

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working!" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});