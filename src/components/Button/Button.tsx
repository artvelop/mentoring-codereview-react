import * as S from './Button.style';

type OnClickType = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface ButtonProps {
  variant?: 'default-black' | 'orange' | 'gray';
  size?: 'small' | 'default';
  fontSize?: 'default' | 'big';
  type?: 'submit' | 'button';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: OnClickType;
}

function Button(props: ButtonProps) {
  const {
    variant = 'default-black',
    size = 'default',
    fontSize = 'default',
    children,
    ...rest
  } = props;

  return (
    <S.Button
      variant={variant}
      size={size}
      fontSize={fontSize}
      // disabled={!!rest.disabled}
      {...rest}
      title="Button"
    >
      {children}
    </S.Button>
  );
}
export default Button;
