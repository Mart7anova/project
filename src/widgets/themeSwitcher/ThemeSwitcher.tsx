import React from 'react';
import { Theme, useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/button';

interface themeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: themeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {
                theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />
            }
        </Button>
    );
};
