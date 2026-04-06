function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { useEffect, useState } from 'react';
import dateParser from './dateParser';
import defaultFormatter from './defaultFormatter';
const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;
const defaultNow = () => Date.now();
export default function TimeAgo({
  date,
  formatter,
  component = 'time',
  live = true,
  minPeriod = 0,
  maxPeriod = WEEK,
  title,
  now = defaultNow,
  ...passDownProps
}) {
  const [timeNow, setTimeNow] = useState(now());
  useEffect(() => {
    if (!live) {
      return;
    }
    const tick = () => {
      const then = dateParser(date).valueOf();
      if (!then) {
        console.warn('[react-timeago] Invalid Date provided');
        return 0;
      }
      const seconds = Math.round(Math.abs(timeNow - then) / 1000);
      const unboundPeriod = seconds < MINUTE ? 1000 : seconds < HOUR ? 1000 * MINUTE : seconds < DAY ? 1000 * HOUR : 1000 * WEEK;
      const period = Math.min(Math.max(unboundPeriod, minPeriod * 1000), maxPeriod * 1000);
      if (period) {
        return setTimeout(() => {
          setTimeNow(now());
        }, period);
      }
      return 0;
    };
    const timeoutId = tick();
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [date, live, maxPeriod, minPeriod, now, timeNow]);
  useEffect(() => {
    setTimeNow(now());
  }, [date]);
  const Komponent = component;
  const then = dateParser(date).valueOf();
  if (!then) {
    return null;
  }
  const seconds = Math.round(Math.abs(timeNow - then) / 1000);
  const suffix = then < timeNow ? 'ago' : 'from now';
  const [value, unit] = seconds < MINUTE ? [Math.round(seconds), 'second'] : seconds < HOUR ? [Math.round(seconds / MINUTE), 'minute'] : seconds < DAY ? [Math.round(seconds / HOUR), 'hour'] : seconds < WEEK ? [Math.round(seconds / DAY), 'day'] : seconds < MONTH ? [Math.round(seconds / WEEK), 'week'] : seconds < YEAR ? [Math.round(seconds / MONTH), 'month'] : [Math.round(seconds / YEAR), 'year'];
  const passDownTitle = typeof title === 'undefined' ? typeof date === 'string' ? date : dateParser(date).toISOString().substring(0, 16).replace('T', ' ') : title;
  const spreadProps = Komponent === 'time' ? {
    ...passDownProps,
    dateTime: dateParser(date).toISOString()
  } : passDownProps;
  const nextFormatter = (value = value, unit = unit, suffix = suffix, epochMilliseconds = then, nextFormatter = defaultFormatter, now = now) => defaultFormatter(value, unit, suffix, epochMilliseconds, nextFormatter, now);
  const effectiveFormatter = formatter || defaultFormatter;
  let content;
  try {
    content = effectiveFormatter(value, unit, suffix, then, nextFormatter, now);
    if (!content) {
      content = defaultFormatter(value, unit, suffix, then, nextFormatter, now);
    }
  } catch (error) {
    console.error('[react-timeago] Formatter threw an error:', error);
    content = defaultFormatter(value, unit, suffix, then, nextFormatter, now);
  }
  return /*#__PURE__*/React.createElement(Komponent, _extends({}, spreadProps, {
    title: passDownTitle
  }), content);
}