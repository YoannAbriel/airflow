const defaultFormatter = (value, _unit, suffix) => {
  const unit = value !== 1 ? _unit + 's' : _unit;
  return value + ' ' + unit + ' ' + suffix;
};
export default defaultFormatter;
export const makeIntlFormatter = ({
  locale,
  ...options
}) => (value, unit, suffix) => {
  const RelativeTimeFormat = Intl.RelativeTimeFormat;
  if (!RelativeTimeFormat) {
    throw new Error('Intl.RelativeTimeFormat is not supported');
  }
  const rtf = new RelativeTimeFormat(locale ?? undefined, {
    style: 'long',
    numeric: 'auto',
    ...options
  });
  return rtf.format(suffix === 'ago' ? -value : value, unit);
};