import Joi from "joi";
import { CreateQuestion } from "../repositories/questionRepository";

export const questionSchema = Joi.object<CreateQuestion>({
  question: Joi.string().required(),
});
