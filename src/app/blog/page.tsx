import { FC } from "react";

import SearchInput from "@/components/UI/SearchInput";
import Articles from "@/components/Articles";

interface Props {}

const BlogPage: FC<Props> = (props) => {
  const {} = props;

  return (
    <div>
      <section className="mb-14">
        <h1 className="text-6xl text-primary font-bold mb-4">Blog</h1>
        <p className="mb-8">
          Recently, I have started writing about JavaScript and its library and
          tools like React, Next.js, TypeScript and ES6 features. Use the search
          box to filter articles by title.
        </p>
        <div className="mb-16">
          <SearchInput />
        </div>
        <div className="">
          <Articles sectionTitle="Recent articles" />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
