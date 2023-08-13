import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

export const H1: FC<Props> = (props) => {
  return (
    <h1
      className={twMerge(
        "text-5xl md:text-6xl text-primary font-bold mb-4",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
};

export const H2: FC<Props> = (props) => {
  return (
    <h2 className={twMerge("text-2xl font-medium mb-4", props.className)}>
      {props.children}
    </h2>
  );
};

export const P: FC<Props> = (props) => {
  return (
    <p className={twMerge("mb-4 font-light opacity-80", props.className)}>
      {props.children}
    </p>
  );
};
