import { addDecorator } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/routerDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/styleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/themeDecorator/ThemeDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
