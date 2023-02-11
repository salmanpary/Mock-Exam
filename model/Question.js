const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionSchema = new Schema(
  {
    examid: {
      type: Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    imageurl: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    options: [
      {
        text: {
          type: String,
          required: true,
        },
        correct: {
          type: Boolean,
          required: true
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);
module.exports = Question = mongoose.model("Question", QuestionSchema);