export default function orderByProps(player, list) {
  const orderedProps = [];
  const unoderedProps = [];

  for (const prop in player) {
    if (Object.prototype.hasOwnProperty.call(player, prop)) {
      const obj = {
        key: prop,
        value: player[prop],
      };

      const propIndex = list.indexOf(prop);

      if (propIndex !== -1) {
        orderedProps[propIndex] = obj;
      } else {
        unoderedProps.push(obj);
      }
    }
  }

  const comparator = (a, b) => a.key.localeCompare(b.key);

  unoderedProps.sort(comparator);

  return [...orderedProps, ...unoderedProps];
}
