import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { Frontmatter, PostMetadata } from "@/types";

export const POSTS_FOLDER_PATH = path.join(process.cwd(), "src", "posts");

const getFilePath = (fileName: string) => {
  return path.join(POSTS_FOLDER_PATH, fileName);
};

const getPost = async (fileName: string) => {
  const filePath = getFilePath(fileName);
  const source = fs.readFileSync(filePath);
  const serializedData = await serialize<any, Frontmatter>(source, {
    parseFrontmatter: true,
  });
  return serializedData;
};

export const getAllPostsMetadata = async () => {
  const files = fs.readdirSync(POSTS_FOLDER_PATH);
  console.log("files", files);

  const postsMetadata = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "");
      const { frontmatter } = await getPost(fileName);
      return { slug, ...frontmatter };
    })
  );

  return postsMetadata;
};

export const getPostBySlug = async (slug: string) => {
  const fileName = slug + ".mdx";
  const post = await getPost(fileName);
  return {
    slug,
    ...post,
  };
};
