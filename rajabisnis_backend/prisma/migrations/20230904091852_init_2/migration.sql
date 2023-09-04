/*
  Warnings:

  - You are about to alter the column `price_multiplier` on the `tb_menu` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "tb_menu" ALTER COLUMN "price_multiplier" SET DATA TYPE INTEGER;
