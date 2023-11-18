import { ElementType, ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";

import { H2, H3, P } from "../UI/Typography";

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
  h3: ({ children, ...rest }) => (
    <Component as={H3} className="mt-8" {...rest}>
      {children}
    </Component>
  ),
  pre: ({ children, ...rest }) => (
    <Component
      as="pre"
      className="mb-4 text-base overflow-hidden rounded-lg border border-line"
      {...rest}
    >
      {children}
    </Component>
  ),
  code: ({ children, ...rest }) => (
    <Component
      as="code"
      className="mb-4 text-[14px] px-1 overflow-hidden rounded-md border border-line"
      {...rest}
    >
      {children}
    </Component>
  ),
  a: ({ children, ...rest }) => (
    <Component
      as="a"
      className="text-inherit underline decoration-primary underline-offset-2"
      {...rest}
    >
      {children}
    </Component>
  ),
};
