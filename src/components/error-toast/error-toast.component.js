import React from 'react';
import { hoc } from '@utils/hoc';
import { useErrorToastProps } from './error-toast.props';
import { SvgIcon } from '@components/atoms';
import ErrorToastImage from '@assets/img/info-icon.svg';
import {
  ErrorToastComponent,
  ErrorToastHolder,
  ErrorToastImg,
  ErrorToastLeft,
  ErrorToastTitle
} from './error-toast.style';

/**
 * <ErrorToast />
 */
export const ErrorToast = hoc(
  useErrorToastProps,
  ({ onCancel, title, children, ...props }) => {
    return (
      <ErrorToastComponent {...props}>
        <ErrorToastHolder>
          <ErrorToastLeft>
            {!children ? (
              <>
                <ErrorToastImg src={ErrorToastImage} />
                <ErrorToastTitle>{title}</ErrorToastTitle>
              </>
            ) : (
              ''
            )}
            {children}
          </ErrorToastLeft>

          <SvgIcon
            iconName='close-icon'
            size='11px'
            $stroke='#fff'
            fill='#fff'
            onClick={onCancel}
          />
        </ErrorToastHolder>
      </ErrorToastComponent>
    );
  }
);
