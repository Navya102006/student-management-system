const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

// DB connection
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Backend + MongoDB running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
