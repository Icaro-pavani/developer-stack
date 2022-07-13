/*
  Warnings:

  - You are about to drop the column `text` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Questions` table. All the data in the column will be lost.
  - Added the required column `answer` to the `Answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "text",
ADD COLUMN     "answer" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "text",
ADD COLUMN     "question" TEXT NOT NULL;
