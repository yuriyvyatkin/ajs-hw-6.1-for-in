import orderByProps from './basic';

console.log('app worked');

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

console.log(orderByProps(swordsman, ['name', 'level']));
