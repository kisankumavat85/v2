import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TabPanel = (props: Props) => {
  return <>{props.children}</>;
};

export default TabPanel;
