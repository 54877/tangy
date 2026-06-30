import { useState } from "react";

export function useInformation<T>(initial: T) {
  const [information, setInformation] = useState<T>(initial);

  const handleOnChange = <K extends keyof T>(
    value: T[K],
    key: K,
    extra?: Partial<T>,
  ) => {
    setInformation((prev) => ({
      ...prev,
      [key]: value,
      ...extra,
    }));
  };

  return {
    information,
    setInformation,
    handleOnChange,
  };
}
