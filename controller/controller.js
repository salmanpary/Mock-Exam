const Exam = require("../model/Exam");
const Question = require("../model/Question");
const User = require("../model/User");
const AddQuestions = async (req, res) => {
  try {
    const { examid, imageurl, text, options } = req.body;
    const question = new Question({
      examid,
      imageurl,
      text,
      options,
    });
    await question.save();
    res.json(question);
  } catch (error) {
    console.log(error);
  }
};
const AddExam = async (req, res) => {
  try {
    const { title, duration } = req.body;
    const exam = new Exam({
      title,
      duration,
    });
    await exam.save();
    res.json(exam);
  } catch (error) {
    console.log(error);
  }
};
const AddUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = new User({
      name,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
const ListExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    console.log(error);
  }
};
const ListQuestions = async (req, res) => {
  try {
    const { examid } = req.body;
    const questions = await Question.find({ examid });
    res.json(questions);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  AddQuestions,
  AddExam,
  AddUser,
  ListExams,
  ListQuestions,
};
