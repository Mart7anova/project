import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t, i18n } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default Main;
