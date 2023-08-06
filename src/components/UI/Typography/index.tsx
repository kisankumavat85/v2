import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const H1: FC<Props> = (props) => {
  return (
    <h1 className="text-5xl md:text-6xl text-primary font-bold mb-4">
      {props.children}
    </h1>
  );
};

export const H2: FC<Props> = (props) => {
  return <h2 className="text-2xl font-medium mb-4">{props.children}</h2>;
};

export const P: FC<Props> = (props) => {
  return <p className="mb-4">{props.children}</p>;
};
