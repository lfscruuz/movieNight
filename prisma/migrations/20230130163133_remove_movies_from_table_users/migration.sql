/*
  Warnings:

  - You are about to drop the column `movie` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_movie_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "movie";
