"use server";

import { prisma } from "@/lib/prisma-lib";

export const incrementArticleView = async (slug: string) => {
  try {
    const post = await prisma.view.findFirst({
      where: {
        slug,
      },
    });

    if (!post) {
      await prisma.view.create({
        data: {
          slug,
          count: 1,
        },
      });

      return;
    }

    await prisma.view.update({
      where: {
        id: post.id,
      },
      data: {
        count: {
          increment: 1,
        },
      },
    });

    return;
  } catch (error) {
    console.log("error", error);
  }
};
