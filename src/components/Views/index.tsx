"use client";

import { FC, useEffect } from "react";
import { BarChart2 } from "react-feather";

import { incrementArticleView } from "@/app/actions";

interface Props {
  slug: string;
  count?: number;
}

const Views: FC<Props> = (props) => {
  const { slug, count } = props;
  const viewCount = Number(count) || 0;

  useEffect(() => {
    (async () => await incrementArticleView(slug))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="flex items-center gap-2">
      <BarChart2 size={16} /> {viewCount} views
    </span>
  );
};

export default Views;
