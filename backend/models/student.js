const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  department: String,
  year: Number,
  attendance: Number,
  marks: Number
});

module.exports = mongoose.model("Student", studentSchema);
