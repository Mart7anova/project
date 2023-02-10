import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/appLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to='/' className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>main</AppLink>
            <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>about</AppLink>
        </div>
    </div>
);
