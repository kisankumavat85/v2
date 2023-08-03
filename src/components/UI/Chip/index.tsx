import { FC } from "react";

interface Props {
  label: string;
}

const Chip: FC<Props> = (props) => {
  const { label } = props;

  return (
    <div className="bg-bg inline-flex border border-line rounded-md mr-2 mb-2">
      <span className="text-xs font-light px-3 py-1 opacity-90">{label}</span>
    </div>
  );
};

export default Chip;
