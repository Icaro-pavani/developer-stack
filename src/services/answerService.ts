import * as answerRepository from "../repositories/answerRepository.js";

// TODO
async function addAnswer(answerInfo: answerRepository.CreateAnswers) {
  await answerRepository.insert(answerInfo);
}

const answerService = { addAnswer };
export default answerService;
