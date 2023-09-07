import { FC } from "react";
import { Calendar } from "react-feather";
import { Metadata } from "next";
import "highlight.js/styles/github-dark.css";

import { getPostBySlug, getPostMeta } from "@/utils";
import { getArticleViews } from "@/services/metrics-services";
import { H1 } from "@/components/UI/Typography";
import Views from "@/components/Views";

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
  const viewsData = await getArticleViews(params.slug);

  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <div className="text-xs md:text-sm opacity-80 flex gap-4 mb-4">
          <span className="flex items-center gap-2">
            <Calendar size={14} />
            <time>{post.frontmatter.date}</time>
          </span>
          <span>|</span>
          <Views slug={params.slug} count={viewsData?.count} />
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
