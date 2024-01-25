import styled, { css } from 'styled-components';

type Props = {
  variant: 'default-black' | 'orange' | 'gray';
  size: 'small' | 'default';
  fontSize: 'default' | 'big';
  // disabled: boolean
};

const variantCSS = {
  'default-black': css`
    background-color: black;
  `,
  'orange': css`
    background-color: orange;
  `,
  'gray': css`
    background-color: gray;
  `,
};

const sizeCSS = {
  default: css`
    width: 100%;
    height: 4.8rem;
  `,
  small: css`
    width: 2.6rem;
    height: 1.2rem;
  `,
};

const fontSizeCSS = {
  default: css`
    font-size: 8px;
  `,
  big: css`
    font-size: 25px;
  `,
};

export const Button = styled.button<Props>`
  color: white;
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
	${({ fontSize }) => fontSizeCSS[fontSize]}
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  border-radius: 5px;
`;
