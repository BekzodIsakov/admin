import { hoc } from '@utils/hoc';
import { SelectOption } from './select-option/select-option.component';
import { SelectContent, SelectHeader, SelectWrapper } from './select.style';
import arrowIcon from '../../../assets/img/arrow.svg';
import { DropDownComponent } from '@components/drop-down';

export const Select = hoc(
  DropDownComponent.hook,
  ({
    open,
    options,
    activeValue,
    toggleDropdown,
    _onChange,
    placeholder,
    isError
  }) => {
    return (
      <SelectWrapper>
        <SelectHeader
          data-testid='field-select'
          onClick={toggleDropdown}
          isOpen={open}
          arrowIcon={arrowIcon}
          isSelect={!!activeValue.label}
          isError={isError}
        >
          {activeValue.label || placeholder}
        </SelectHeader>
        <SelectContent isOpen={open}>
          {options?.length > 0 ? (
            options.map((option, index) => (
              <SelectOption
                data-testid={'field-select-option-' + option.value}
                onClick={_onChange.bind(null, option.value)}
                label={option.label}
                active={activeValue.value === option.value}
                key={index}
              />
            ))
          ) : (
            <SelectOption label={placeholder} active />
          )}
        </SelectContent>
      </SelectWrapper>
    );
  }
);
