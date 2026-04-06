const normalizeNumber = (numbers, value) => numbers && numbers.length === 10 ? String(value).split('').map(digit => digit.match(/^[0-9]$/) ? numbers[parseInt(digit)] : digit).join('') : String(value);
const normalizeFn = (value, distanceMillis, numbers) => stringOrFn => typeof stringOrFn === 'function' ? stringOrFn(value, distanceMillis).replace(/%d/g, normalizeNumber(numbers, value)) : stringOrFn.replace(/%d/g, normalizeNumber(numbers, value));
const pluralize = unit => {
  switch (unit) {
    case 'second':
      return 'seconds';
    case 'minute':
      return 'minutes';
    case 'hour':
      return 'hours';
    case 'day':
      return 'days';
    case 'week':
      return 'weeks';
    case 'month':
      return 'months';
    case 'year':
      return 'years';
    default:
      return unit;
  }
};
export default function buildFormatter(strings) {
  return function formatter(_value, _unit, suffix, epochMilliseconds, _nextFormmater, now) {
    const current = now();
    let value = _value;
    let unit = _unit;
    if (unit === 'week' && !strings.week && !strings.weeks) {
      const days = Math.round(Math.abs(epochMilliseconds - current) / (1000 * 60 * 60 * 24));
      value = days;
      unit = 'day';
    }
    const normalize = normalizeFn(value, current - epochMilliseconds, strings.numbers != null ? strings.numbers : undefined);
    const dateString = [];
    if (suffix === 'ago' && strings.prefixAgo) {
      dateString.push(normalize(strings.prefixAgo));
    }
    if (suffix === 'from now' && strings.prefixFromNow) {
      dateString.push(normalize(strings.prefixFromNow));
    }
    const isPlural = value > 1;
    if (isPlural) {
      const stringFn = strings[pluralize(unit)] || strings[unit] || '%d ' + unit;
      dateString.push(normalize(stringFn));
    } else {
      const stringFn = strings[unit] || strings[pluralize(unit)] || '%d ' + unit;
      dateString.push(normalize(stringFn));
    }
    if (suffix === 'ago' && strings.suffixAgo) {
      dateString.push(normalize(strings.suffixAgo));
    }
    if (suffix === 'from now' && strings.suffixFromNow) {
      dateString.push(normalize(strings.suffixFromNow));
    }
    const wordSeparator = typeof strings.wordSeparator === 'string' ? strings.wordSeparator : ' ';
    return dateString.join(wordSeparator);
  };
}