import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

import { components } from "@/components/MDXComponents";
import { Frontmatter } from "@/types";

export const POSTS_FOLDER_PATH = path.join(process.cwd(), "src", "posts");

const getFilePath = (fileName: string) => {
  return path.join(POSTS_FOLDER_PATH, fileName);
};

const getPost = async (fileName: string) => {
  const filePath = getFilePath(fileName);
  const source = fs.readFileSync(filePath);
  const compailedMdx = await compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    },
    components: { ...components },
  });
  return compailedMdx;
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(POSTS_FOLDER_PATH);

  const postsMeta = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "");
      const { frontmatter } = await getPost(fileName);
      return { slug, ...frontmatter };
    })
  );

  return postsMeta;
};

export const getPostBySlug = async (slug: string) => {
  const fileName = slug + ".mdx";
  const post = await getPost(fileName);
  return {
    slug,
    ...post,
  };
};
