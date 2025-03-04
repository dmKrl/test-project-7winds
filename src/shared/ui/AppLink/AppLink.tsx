import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import LinkIcon from 'shared/assets/icons/link-icon.svg';
import { AppLinkUI } from './AppLink.styles';

interface AppLinkProps extends LinkProps {
    iconIsActive?: boolean;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, children, iconIsActive } = props;

    return (
        <AppLinkUI to={to}>
            {iconIsActive && <LinkIcon />}
            {children}
        </AppLinkUI>
    );
};
