import styled, { css } from 'styled-components';
import {
  getThemeColorByVariant,
  getSizeBySizeType,
  getFontSizeBySizeType
} from '@utils/style-helpers';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${getSizeBySizeType({ large: 1.2, middle: 1, small: 0.8 })}rem;

  border: none;
  background-color: transparent;
  padding: 0.2rem;
  font-family: ManropeSemiBold;
  transition-duration: 200ms;

  & > svg {
    width: ${getSizeBySizeType({ large: 2, middle: 1.6, small: 1.1 })}rem;
    height: ${getSizeBySizeType({ large: 2, middle: 1.6, small: 1.1 })}rem;
    fill: ${props =>
      props.iconColor ||
      getThemeColorByVariant({
        primary: 'black',
        secondary: 'brown'
      })};
    stroke: ${props =>
      props.$stroke
        ? props.iconColor
          ? props.iconColor
          : getThemeColorByVariant({
              primary: 'black',
              secondary: 'brown'
            })
        : 'none'};
  }

  &[disabled] {
    pointer-events: none;
    user-select: none;
    opacity: 0.6;

    & > svg {
      opacity: 0.3;
    }
  }

  ${props =>
    props.buttonType === 'button' &&
    css`
      width: ${props => props.width};
      padding: ${getSizeBySizeType({
        large: '1.1rem 2.4rem',
        middle: '0.8rem 2.4rem',
        small: '0.6rem 1.8rem'
      })};
      border-radius: ${props =>
        props.size === 'small'
          ? props.theme.borderRadius[300]
          : props.theme.borderRadius[100]};
      font-size: ${getFontSizeBySizeType({
        large: 'md',
        middle: 'sm',
        small: 'xs'
      })};
      line-height: ${getSizeBySizeType({ large: 2.2, middle: 2, small: 2 })}rem;

      & > svg {
        width: ${getSizeBySizeType({ large: 1.2, middle: 1.1, small: 1 })}rem;
        height: ${getSizeBySizeType({ large: 1.2, middle: 1.1, small: 1 })}rem;
      }

      &:hover {
        & > svg {
          fill: ${props =>
            props.variant !== 'primary' && `${props.theme.colors.black}60`};
          stroke: ${props =>
            props.$stroke
              ? props.variant !== 'primary' && `${props.theme.colors.black}60`
              : 'none'};
        }
      }
    `}

  ${props =>
    props.buttonType === 'roundButton' &&
    css`
      min-width: ${getSizeBySizeType({
        large: 4.4,
        middle: 4,
        small: 2.8
      })}rem;
      width: ${getSizeBySizeType({ large: 4.4, middle: 4, small: 2.8 })}rem;
      height: ${getSizeBySizeType({ large: 4.4, middle: 4, small: 2.8 })}rem;
      border-radius: 50%;

      font-size: ${props =>
        props.size === 'large'
          ? props.theme.fontSizes.xs
          : props.theme.fontSizes.xxs};

      & > svg {
        width: ${getSizeBySizeType({ large: 1.5, middle: 1.5, small: 1 })}rem;
        height: ${getSizeBySizeType({ large: 1.5, middle: 1.5, small: 1 })}rem;
        fill: ${getThemeColorByVariant({
          primary: 'white',
          secondary: 'black'
        })};
        stroke: ${props =>
          props.$stroke
            ? getThemeColorByVariant({ primary: 'white', secondary: 'black' })
            : 'none'};
      }
    `}

  ${props =>
    (props.buttonType === 'button' || props.buttonType === 'roundButton') &&
    css`
      background-color: ${getThemeColorByVariant({
        primary: 'brown',
        secondary: 'seaGreen'
      })};
      color: ${getThemeColorByVariant({
        primary: 'white',
        secondary: 'black'
      })};

      & > svg {
        fill: ${props =>
          props.variant === 'primary' && props.theme.colors.white};
        stroke: ${props =>
          props.$stroke
            ? props.variant === 'primary' && props.theme.colors.white
            : 'none'};
      }

      &:hover {
        background-color: ${getThemeColorByVariant({
          primary: 'lightBrown',
          secondary: 'lightSeaGreen'
        })};
        color: ${props =>
          props.variant !== 'primary' && `${props.theme.colors.black}60`};
      }

      &:active {
        background-color: ${getThemeColorByVariant({
          primary: 'brown50',
          secondary: 'seaGreen'
        })};
        color: ${props => props.theme.colors.white};

        & > svg {
          fill: ${props => props.theme.colors.white};
          stroke: ${props =>
            props.$stroke ? props.theme.colors.white : 'none'};
        }
      }
    `}

    ${props =>
    props.readonly &&
    css`
      pointer-events: none;
      user-select: none;
    `}
`;
