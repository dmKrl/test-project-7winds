import { FC } from 'react';
import { TextItemWhiteUI } from './TextItemWhite.styles';

interface TextItemProps {
    children: string;
}

export const TextItemWhite: FC<TextItemProps> = ({ children }) => {
    return (
        <TextItemWhiteUI>
            {children}
        </TextItemWhiteUI>
    );
};
