import { FC } from "react";

import Navigation from "./Navigation";

interface Props {}

const Header: FC<Props> = (props) => {
  const {} = props;

  return (
    <header className="mt-5 mb-14">
      <Navigation />
    </header>
  );
};

export default Header;
