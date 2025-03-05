import { FC } from 'react';
import { TextItemGrayUI } from './TextItemGray.styles';

interface TextItemProps {
    children: string;
}

export const TextItemGray: FC<TextItemProps> = ({ children }) => {
    return (
        <TextItemGrayUI>
            {children}
        </TextItemGrayUI>
    );
};
