import { FC } from "react";
import { ArrowRight, ExternalLink } from "react-feather";

interface Props {
  // title: string;
  // date: string;
  // summary: string;
}

const Article: FC<Props> = (props) => {
  // const { title, date, summary } = props;

  return (
    <div className="bg-bg border border-line rounded-lg ">
      <div className="p-4">
        <h3 className="text-md text-primary">
          Everything I Know About Style Guides, Design Systems, and Component
          Libraries
        </h3>
      </div>
      <div className="border-t border-line">
        <p className="flex justify-between items-center px-4 py-2">
          <span className="group pr-1 flex items-center gap-1 cursor-pointer">
            <span className="text-sm text-primary font-light border-transparent border-b-2 border-dashed group-hover:border-primary">
              Read
            </span>
            <ArrowRight
              size={16}
              className="text-primary cursor-pointer transition-all group-hover:translate-x-1"
            />
          </span>
          <span className="text-sm font-light italic opacity-60">
            May 8, 2023
          </span>
        </p>
      </div>
    </div>
  );
};

export default Article;
