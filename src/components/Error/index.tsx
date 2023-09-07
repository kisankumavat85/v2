import { FC, useEffect } from "react";

import { H2, P } from "../UI/Typography";
import Button from "../UI/Button";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<Props> = (props) => {
  const { error, reset } = props;

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col mb-16 h-[200px] md:h-[300px]">
      <H2 className="text-2xl text-center mb-2">Something went wrong!</H2>
      <P className="text-center mb-14">{error.message}</P>

      <div className="flex justify-center items-center gap-4">
        <Button
          label="Try again"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        />
        <Button label="Go Home" href="/" />
      </div>
    </div>
  );
};

export default Error;
