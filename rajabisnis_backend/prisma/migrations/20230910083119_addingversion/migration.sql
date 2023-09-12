-- CreateTable
CREATE TABLE "VersionUpdate" (
    "id" SERIAL NOT NULL,
    "update_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VersionUpdate_pkey" PRIMARY KEY ("id")
);
