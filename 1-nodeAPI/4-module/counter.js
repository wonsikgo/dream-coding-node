let count = 0;

export function increase() {
  count++;
}

export function decrease() {
  count--;
}

export function getCount() {
  return count;
}

/* module.exports.getCount = getCount;
module.exports.increase = increase; */
