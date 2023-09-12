-- AlterTable
ALTER TABLE "tb_menu" ADD COLUMN     "shopId" TEXT;

-- AddForeignKey
ALTER TABLE "tb_menu" ADD CONSTRAINT "tb_menu_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
