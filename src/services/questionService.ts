import * as questionRepository from "../repositories/questionRepository.js";

// TODO
async function addQuestion(question: questionRepository.CreateQuestion) {
  await questionRepository.insert(question);
}

async function getAllQuestions() {
  const questions = await questionRepository.findAll();
  return questions;
}

async function getQuestionById(id: number) {
  const question = await questionRepository.findById(id);
  return question;
}

const questionService = { addQuestion, getAllQuestions, getQuestionById };
export default questionService;
