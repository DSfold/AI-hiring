import { useState } from "react";

export const useSetHeroTableData = () => {
  const [activeCategory, setActiveCategory] = useState<number>(2.2);

  const handleSetActiveCategory = (value: number) => {
    setActiveCategory(value);
  };

  return { activeCategory, handleSetActiveCategory };
};
