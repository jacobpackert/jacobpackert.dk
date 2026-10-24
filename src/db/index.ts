import { PrismaClient } from "../../prisma/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter})

export async function getLikesForPost(postId: number) {

  const count = await prisma.likes.count({
    where: {
      postId,
    },
  })

  return count;
}

export async function likePost(postId: number) {
  return await prisma.likes.create({
    data: {
      postId,
    },
  })
}