/*
  Warnings:

  - You are about to drop the `tb_menu` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tb_menu";

-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level_max" INTEGER NOT NULL DEFAULT 10,
    "price" INTEGER NOT NULL,
    "price_multiplier" INTEGER NOT NULL DEFAULT 0,
    "price_unlock" INTEGER NOT NULL DEFAULT 0,
    "shopId" TEXT,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
