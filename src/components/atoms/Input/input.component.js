import { hoc } from '@utils/hoc';
import { useInputProps } from './input.props';
import {
  InputField,
  InputPrefix,
  InputSuffix,
  InputWrapper
} from './input.style';

export const Input = hoc(
  useInputProps,
  ({
    prefix,
    suffix,
    prefixProps,
    suffixProps,
    _onChange,
    _onBlur,
    inputRef,
    ...props
  }) => {
    const PrefixComponent = prefix;
    const SuffixComponent = suffix;
    return (
      <InputWrapper>
        <InputPrefix {...prefixProps}>
          {typeof prefix === 'function' ? <PrefixComponent /> : prefix}
        </InputPrefix>
        <InputField
          data-testid='input'
          {...props}
          isPrefix={!!prefix}
          onChange={_onChange}
          onBlur={_onBlur}
          ref={inputRef}
        />
        <InputSuffix {...suffixProps}>
          {typeof prefix === 'function' ? <SuffixComponent /> : suffix}
        </InputSuffix>
      </InputWrapper>
    );
  },
  'Input'
);
