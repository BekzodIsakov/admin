import { useState, useEffect, useMemo } from 'react';

export const useDropDownProps = ({
  options,
  defaultOption,
  value,
  onChange
}) => {
  const [open, setOpen] = useState(false);
  const [optionValue, setOptionValue] = useState(defaultOption);

  const activeValue = useMemo(() => {
    return options.find(option => option.value === optionValue) || {};
  }, [optionValue, options]);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const _onChange = (value, e) => {
    e.preventDefault();
    setOptionValue(value);
    setOpen(false);
    onChange?.(value);
  };

  useEffect(() => {
    if (value) {
      setOptionValue(value);
    }
  }, [value]);

  return {
    open,
    activeValue,
    toggleDropdown,
    _onChange
  };
};
