/*
  Warnings:

  - Added the required column `price_multiplier` to the `tb_menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_menu" ADD COLUMN     "price_multiplier" INTEGER NOT NULL;
