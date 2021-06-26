import orderByProps from '../basic';

test('player properties are sorted correctly', () => {
  const humans = {
    race: 'Человек',
    capitalCity: 'Штормград',
    enemies: 'Орки',
  };
  const swordsman = {
    __proto__: humans,
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
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
