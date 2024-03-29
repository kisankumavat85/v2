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
  const compiledMdx = await compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    },
    components: { ...components },
  });
  return compiledMdx;
};

export const getPostMeta = async (slug: string) => {
  const fileName = slug + ".mdx";
  const { frontmatter } = await getPost(fileName);
  return frontmatter;
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(POSTS_FOLDER_PATH);

  let postsMeta = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "");
      const { frontmatter } = await getPost(fileName);
      return { slug, ...frontmatter };
    })
  );

  if (process.env.NODE_ENV !== "development") {
    postsMeta = postsMeta.filter((p) => p.isCompleted);
  }

  postsMeta = postsMeta.sort((a, b) => {
    if (new Date(a.date).getTime() < new Date(b.date).getTime()) return 1;
    if (new Date(a.date).getTime() > new Date(b.date).getTime()) return -1;
    return 0;
  });

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
