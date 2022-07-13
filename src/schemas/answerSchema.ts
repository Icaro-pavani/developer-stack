import Joi from "joi";
import { CreateAnswers } from "../repositories/answerRepository";

type CreateAnswerData = Omit<CreateAnswers, "questionId">;

export const answerSchema = Joi.object<CreateAnswerData>({
  answer: Joi.string().required(),
});
