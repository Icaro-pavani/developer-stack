// TODO
import { prisma } from "../config/database.js";

import { Answers } from "@prisma/client";

export type CreateAnswers = Omit<Answers, "id">;

export async function insert(questionInfo: CreateAnswers) {
  await prisma.answers.create({ data: questionInfo });
}
