import Link from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  className?: string;
  href?: string;
}

const Button: FC<Props> = (props) => {
  const { label, className, href, ...rest } = props;

  return (
    <button
      className={twMerge(
        "bg-bg border px-6 py-1 border-line text-white rounded-md",
        className
      )}
      {...rest}
    >
      {href ? <Link href={href}>{label}</Link> : label}
    </button>
  );
};

export default Button;
