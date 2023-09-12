/*
  Warnings:

  - You are about to drop the `tb_shop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tb_shop";

-- CreateTable
CREATE TABLE "Shop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);
