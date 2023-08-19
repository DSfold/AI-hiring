import { useState } from "react";

export const useCarouselControls = () => {
  const [active, setActive] = useState<number>(1);

  const handleSetActive = (value: number) => {
    setActive(value);
  };

  return { active, handleSetActive };
};
