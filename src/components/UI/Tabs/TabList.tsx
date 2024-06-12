import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TabList = (props: Props) => {
  return <ul className="flex gap-8 mb-6">{props.children}</ul>;
};

export default TabList;
