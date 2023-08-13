import { ElementType, ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";

import { H2, P } from "../UI/Typography";

interface ComponentProps {
  as: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Component = (props: ComponentProps) => {
  const { as: Tag = "div", ...rest } = props;
  return <Tag {...rest} />;
};

type Components = React.ComponentProps<typeof MDXProvider>["components"];

export const components: Components = {
  p: ({ children, ...rest }) => (
    <Component as={P} {...rest}>
      {children}
    </Component>
  ),
  h1: ({ children, ...rest }) => (
    <Component as="h1" className="mt-8" {...rest}>
      {children}
    </Component>
  ),
  h2: ({ children, ...rest }) => (
    <Component as={H2} className="mt-8" {...rest}>
      {children}
    </Component>
  ),
  pre: ({ children, ...rest }) => (
    <Component
      as="pre"
      className="mb-4 text-base border-0 overflow-hidden rounded-lg"
      {...rest}
    >
      {children}
    </Component>
  ),
};
