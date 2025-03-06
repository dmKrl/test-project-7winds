import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonUI } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, onClick, className } = props;

    return (
        <ButtonUI type='button' onClick={onClick}>
            {children}
        </ButtonUI>
    );
};
