import { FC } from 'react';
import { TextItemUI } from './TextItem.styles';

interface TextItemProps {
    children: string;
}

export const TextItem: FC<TextItemProps> = ({ children }) => {
    return (
        <TextItemUI>
            {children}
        </TextItemUI>
    );
};
