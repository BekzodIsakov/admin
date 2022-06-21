import React from 'react';
import { hoc } from '@utils/hoc';
import { useTextareaProps } from './textarea.props';
import {
  TextareaContainer,
  TextareaField,
  TextareaSuffixContainer
} from './textarea.style';

/**
 * <Textarea />
 */
export const Textarea = hoc(
  useTextareaProps,
  ({ suffix, _onChange, _textareaRef, suffixPadding, ...rest }) => (
    <TextareaContainer suffixPadding={suffixPadding}>
      <TextareaField
        data-testid='textarea-field'
        rows={1}
        {...rest}
        ref={_textareaRef}
        onChange={_onChange}
      />
      <TextareaSuffixContainer>{suffix}</TextareaSuffixContainer>
    </TextareaContainer>
  )
);
