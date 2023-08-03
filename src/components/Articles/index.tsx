import { FC } from "react";
import Article from "../Article";

interface Props {
  sectionTitle: string;
}

const Articles: FC<Props> = (props) => {
  const { sectionTitle } = props;

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-6">{sectionTitle}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default Articles;
