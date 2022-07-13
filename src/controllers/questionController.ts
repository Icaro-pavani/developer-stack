import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  // TODO
  const { question }: { question: string } = req.body;
  await questionService.addQuestion({ question });

  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  // TODO
  const { answer }: { answer: string } = req.body;
  const id: number = parseInt(req.params.id);

  if (!id) {
    throw { type: "conflict" };
  }

  await answerService.addAnswer({ questionId: id, answer });

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  // TODO
  const questions = await questionService.getAllQuestions();

  res.status(200).send({ questions });
}

export async function getById(req: Request, res: Response) {
  // TODO
  const id: number = parseInt(req.params.id);

  if (!id) {
    throw { type: "conflict" };
  }

  const question = await questionService.getQuestionById(id);

  res.status(200).send(question);
}
