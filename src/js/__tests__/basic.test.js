import orderByProps from '../basic';

const humans = {
  race: 'Человек',
  capitalCity: 'Штормград',
  enemies: 'Орки',
};
const swordsman = Object.create(humans);
swordsman.name = 'мечник';
swordsman.health = 10;
swordsman.level = 2;
swordsman.attack = 80;
swordsman.defence = 40;

test('player properties are sorted correctly with the second argument', () => {
  const result = orderByProps(swordsman, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(result).toEqual(expected);
});

test('player properties are sorted correctly with the second argument empty', () => {
  const result = orderByProps(swordsman, []);
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  expect(result).toEqual(expected);
});
