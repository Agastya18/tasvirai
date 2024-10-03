/*
  Warnings:

  - You are about to drop the `SharedLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('FREE', 'STANDARD', 'PREMIUM');

-- DropForeignKey
ALTER TABLE "SharedLink" DROP CONSTRAINT "SharedLink_photoId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "storagePlan" "Plan" NOT NULL DEFAULT 'FREE',
ADD COLUMN     "storageUsed" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "SharedLink";

-- DropEnum
DROP TYPE "LinkType";
