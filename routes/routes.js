const express = require("express");
const router = express.Router();
const Controller=require("../controller/controller");
router.post("/adduser", Controller.AddUser);
router.get("/listexams", Controller.ListExams);
router.post("/listquestions", Controller.ListQuestions);
router.post("/addquestion", Controller.AddQuestions);
router.post("/addexam", Controller.AddExam);
module.exports = router;
