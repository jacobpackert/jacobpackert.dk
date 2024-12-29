-- CreateTable
CREATE TABLE "Likes" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);
