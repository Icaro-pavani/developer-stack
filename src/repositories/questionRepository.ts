// TODO
import { prisma } from "../config/database.js";

import { Questions } from "@prisma/client";

export type CreateQuestion = Omit<Questions, "id">;

export async function insert(question: CreateQuestion) {
  await prisma.questions.create({ data: question });
}

export async function findAll() {
  return await prisma.questions.findMany();
}

export async function findById(id: number) {
  return await prisma.questions.findUnique({
    where: { id },
    select: { id: true, question: true, answers: { select: { answer: true } } },
  });
}
