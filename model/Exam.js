const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExamSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    hour: {
      type: Number,
    },
    minute: {
      type: Number,
    },
    second: {
      type: Number,
    },
  },
});
module.exports = Exam = mongoose.model("Exam", ExamSchema);