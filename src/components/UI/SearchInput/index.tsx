"use client";

import { FC, useEffect, useRef } from "react";
import { Search } from "react-feather";

interface Props {}

const SearchInput: FC<Props> = (props) => {
  const {} = props;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.code === "Slash" &&
        inputRef.current !== document.activeElement
      ) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      <input
        className="w-full text-sm bg-bg border border-line focus:ring-1 focus:ring-primary focus:outline-none text-gray-50 px-4 py-2 pl-12 rounded-md"
        id="search"
        name="search"
        placeholder={`Press "/" to focus`}
        ref={inputRef}
      />
      <Search size={16} className="absolute top-[28%] left-4" />
    </div>
  );
};

export default SearchInput;
