import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import { AppLinkUI } from './AppLink.styles';

interface AppLinkProps extends LinkProps {
    iconProject?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, children, iconProject } = props;

    return (
        <AppLinkUI to={to}>
            {iconProject && <img src={iconProject} alt='icon-of-project' />}
            {children}
        </AppLinkUI>
    );
};
