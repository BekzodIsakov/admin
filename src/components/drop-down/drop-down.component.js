import { hoc } from '@utils/hoc';

import { useDropDownProps } from './drop-down.props';

import {
  DropDownHolder,
  DropDownItemsWrapper,
  DropDownTitle,
  DropDownItem
} from './drop-down.style';

export const DropDownComponent = hoc(
  useDropDownProps,
  ({ open, options, activeValue, toggleDropdown, _onChange }) => {
    return (
      <DropDownHolder>
        <DropDownTitle data-testid='field-dropdown' onClick={toggleDropdown}>
          {activeValue.label}
        </DropDownTitle>

        <DropDownItemsWrapper active={open}>
          {options?.map((item, index) => (
            <DropDownItem
              key={index}
              data-testid={'field-dropdown-option-' + item.value}
              onClick={_onChange.bind(null, item.value)}
            >
              {item.label}
            </DropDownItem>
          ))}
        </DropDownItemsWrapper>
      </DropDownHolder>
    );
  }
);
