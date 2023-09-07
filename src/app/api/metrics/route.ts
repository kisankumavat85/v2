import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma-lib";

export const GET = async (req: Request) => {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const slug = searchParams.get("slug");

    if (!slug) {
      return new NextResponse(JSON.stringify({ message: "Slug not found" }), {
        status: 404,
      });
    }

    const post = await prisma.view.findFirst({
      where: {
        slug,
      },
    });

    return new NextResponse(
      JSON.stringify({
        count: post?.count,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log("error", error);
  }
};

export const POST = async (req: Request) => {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug") as string;

    const post = await prisma.view.findFirst({
      where: {
        slug,
      },
    });

    if (!post) {
      const updatedViews = await prisma.view.create({
        data: {
          slug,
          count: 1,
        },
      });

      return new NextResponse(JSON.stringify({ data: updatedViews }), {
        headers: { "Content-Type": "application/json" },
        status: 201,
      });
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

    return new NextResponse(JSON.stringify({ message: "View incremented" }), {
      status: 200,
    });
  } catch (error) {
    console.log("error", error);
  }
};
