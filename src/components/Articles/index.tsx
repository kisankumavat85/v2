import { FC } from "react";
import Article from "../Article";
import { H2 } from "../UI/Typography";

interface Props {
  sectionTitle: string;
}

const Articles: FC<Props> = (props) => {
  const { sectionTitle } = props;

  return (
    <section className="mb-16">
      <H2>{sectionTitle}</H2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default Articles;
