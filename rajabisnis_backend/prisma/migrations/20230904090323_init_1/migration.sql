-- CreateTable
CREATE TABLE "tb_menu" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level_max" INTEGER NOT NULL DEFAULT 10,
    "price" INTEGER NOT NULL,
    "price_multiplier" BIGINT NOT NULL,
    "price_unlock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "tb_menu_pkey" PRIMARY KEY ("id")
);
