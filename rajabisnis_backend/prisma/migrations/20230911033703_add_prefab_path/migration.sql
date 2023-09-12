-- AlterTable
ALTER TABLE "Shop" ADD COLUMN     "banner_display" TEXT NOT NULL DEFAULT 'bannerdefault.png',
ADD COLUMN     "prefab_path" TEXT NOT NULL DEFAULT 'Prefab/Menu/',
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "shop_display" TEXT NOT NULL DEFAULT 'shopdefault.png';
