import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClassName')).toBe('someClassName');
    });

    test('with additional class', () => {
        const expectResult = 'someClassName class test';

        expect(classNames('someClassName', {}, ['class', 'test']))
            .toBe(expectResult);
    });

    test('with mods', () => {
        const expectResult = 'someClassName class test hovered scrolled';

        expect(classNames(
            'someClassName',
            { hovered: true, scrolled: true },
            ['class', 'test'],
        )).toBe(expectResult);
    });

    test('with mods false', () => {
        const expectResult = 'someClassName class test hovered';

        expect(classNames(
            'someClassName',
            { hovered: true, scrolled: false },
            ['class', 'test'],
        )).toBe(expectResult);
    });

    test('with mods undefined', () => {
        const expectResult = 'someClassName class test hovered';

        expect(classNames(
            'someClassName',
            { hovered: true, scrolled: undefined },
            ['class', 'test'],
        )).toBe(expectResult);
    });
});
