import { useState } from 'react';

export const useLeftSidebarProps = () => {
  const [collapse, setCollapse] = useState(false);

  function toggleCollapse() {
    setCollapse(!collapse);
  }

  return {
    collapse,
    toggleCollapse
  };
};
