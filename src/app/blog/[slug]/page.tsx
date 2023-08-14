import { FC } from "react";
import { Calendar } from "react-feather";
import "highlight.js/styles/atom-one-dark.css";

import { H1 } from "@/components/UI/Typography";
import { getPostBySlug, getPostMeta } from "@/utils";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const meta = await getPostMeta(params.slug);
  return {
    title: meta.title,
    description: meta.excerpt,
    authors: { name: "Kisan Kumavat" },
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      siteName: "Kisan Kumavat",
      authors: ["Kisan Kumavat"],
    },
  };
};

const ArticlePage: FC<Props> = async (props) => {
  const { params } = props;
  const post = await getPostBySlug(params.slug);

  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <div className="text-xs md:text-sm opacity-80 flex gap-4 mb-4">
          <span className="flex items-center gap-2">
            <Calendar size={14} />
            <time>{post.frontmatter.date}</time>
          </span>
          <span>|</span>
          <span>{post.frontmatter.readingTime} mins read</span>
        </div>
        <H1 className="md:text-5xl text-3xl tracking-tight">
          {post.frontmatter.title}
        </H1>
      </div>
      <article className="article">{post.content}</article>
    </div>
  );
};

export default ArticlePage;
