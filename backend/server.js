const express = require("express");
const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Student Management System Backend Running");
});

// Role test routes
app.get("/admin", (req, res) => {
  res.send("Admin Dashboard API");
});

app.get("/teacher", (req, res) => {
  res.send("Teacher Dashboard API");
});

app.get("/student", (req, res) => {
  res.send("Student Dashboard API");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
