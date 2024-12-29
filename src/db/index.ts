import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



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