-- CreateTable
CREATE TABLE "tb_shop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "tb_shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_menu" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level_max" INTEGER NOT NULL DEFAULT 10,
    "price" INTEGER NOT NULL,
    "price_multiplier" INTEGER NOT NULL DEFAULT 0,
    "price_unlock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "tb_menu_pkey" PRIMARY KEY ("id")
);
