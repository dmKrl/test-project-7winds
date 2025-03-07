import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import LinkIcon from 'shared/assets/icons/link-icon.svg';
import { AppLinkUI } from './AppLink.styles';

interface AppLinkProps extends LinkProps {
    iconIsActive?: boolean;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, children, iconIsActive, style,
    } = props;

    return (
        <AppLinkUI style={style} to={to}>
            {iconIsActive && <LinkIcon />}
            {children}
        </AppLinkUI>
    );
};
