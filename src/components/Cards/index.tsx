import { FC } from "react";

import Card from "../Card";
import { H2 } from "../UI/Typography";
import { PostMetadata } from "@/types";

interface Props {
  sectionTitle: string;
  posts: PostMetadata[];
}

const Cards: FC<Props> = (props) => {
  const { sectionTitle, posts } = props;

  return (
    <section className="mb-16">
      <H2>{sectionTitle}</H2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} title={p.title} date={p.date} slug={p.slug} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
