/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `shopId` on table `Menu` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Menu" ALTER COLUMN "shopId" SET NOT NULL;

-- DropTable
DROP TABLE "User";

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
