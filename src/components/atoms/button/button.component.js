import React from 'react';
import { SvgIcon } from '../../atoms/icons';
import { StyledButton } from './button.style';

export const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  buttonType,
  size = 'middle',
  iconName,
  iconColor,
  $stroke,
  ...rest
}) => {
  let elements;
  switch (buttonType) {
    case 'button':
      elements = (
        <>
          <span>{children}</span>
          {iconName && <SvgIcon $stroke={$stroke} iconName={iconName} />}
        </>
      );
      break;
    case 'roundButton':
      elements = (
        <>
          {iconName ? (
            <SvgIcon $stroke={$stroke} iconName={iconName} />
          ) : (
            children
          )}
        </>
      );
      break;
    default:
      elements = <SvgIcon $stroke={$stroke} iconName={iconName} />;
  }

  return (
    <StyledButton
      variant={variant}
      buttonType={buttonType}
      size={size}
      iconColor={iconColor}
      $stroke={$stroke}
      type={type}
      {...rest}
    >
      {elements}
    </StyledButton>
  );
};
