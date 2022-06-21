import { Option } from './select-option.style';

export const SelectOption = ({ label, active, ...props }) => {
  return (
    <Option isActive={active} {...props}>
      {label}
    </Option>
  );
};
