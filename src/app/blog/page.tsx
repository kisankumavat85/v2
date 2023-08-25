import { FC } from "react";

import SearchInput from "@/components/UI/SearchInput";
import Cards from "@/components/Cards";
import { H1, P } from "@/components/UI/Typography";
import { getAllPostsMeta } from "@/utils";

interface Props {}

const BlogPage: FC<Props> = async () => {
  let posts = await getAllPostsMeta();

  return (
    <div>
      <section className="mb-14">
        <H1>Blog</H1>
        <P>
          Recently, I have started writing about JavaScript and its library and
          tools like React, Next.js, TypeScript and ES6 features. Use the search
          box to filter articles by title.
        </P>
        <div>
          <SearchInput />
        </div>
      </section>
      <Cards sectionTitle="Recent articles" posts={posts} />
    </div>
  );
};

export default BlogPage;
