import { useImperativeHandle, useRef } from 'react';

/**
 * <Textarea /> props
 */
export const useTextareaProps = ({ onChange, textareaRef }) => {
  const _textareaRef = useRef();

  const _onChange = e => {
    const value = e.target?.value;
    if (_textareaRef.current) {
      _textareaRef.current.style.height = 'auto';
      _textareaRef.current.style.height =
        _textareaRef.current.scrollHeight + 'px';
    }
    onChange?.(value);
  };

  useImperativeHandle(textareaRef, () => ({
    focus: () => {
      _textareaRef.current.focus();
    },
    get value() {
      return _textareaRef.current.value;
    },
    set value(val) {
      _textareaRef.current.value = val;
    }
  }));

  return {
    _onChange,
    _textareaRef
  };
};
