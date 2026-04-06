// src/constrain.ts
import {
  maxDate,
  minDate,
  startOfMonth,
  startOfWeek,
  startOfYear,
  toCalendarDate
} from "@internationalized/date";
function alignCenter(date, duration, locale, min, max) {
  const halfDuration = {};
  for (let prop in duration) {
    const key = prop;
    const value = duration[key];
    if (value == null) continue;
    halfDuration[key] = Math.floor(value / 2);
    if (halfDuration[key] > 0 && value % 2 === 0) {
      halfDuration[key]--;
    }
  }
  const aligned = alignStart(date, duration, locale).subtract(halfDuration);
  return constrainStart(date, aligned, duration, locale, min, max);
}
function alignStart(date, duration, locale, min, max) {
  let aligned = date;
  if (duration.years) {
    aligned = startOfYear(date);
  } else if (duration.months) {
    aligned = startOfMonth(date);
  } else if (duration.weeks) {
    aligned = startOfWeek(date, locale);
  }
  return constrainStart(date, aligned, duration, locale, min, max);
}
function alignEnd(date, duration, locale, min, max) {
  let d = { ...duration };
  if (d.days) {
    d.days--;
  } else if (d.weeks) {
    d.weeks--;
  } else if (d.months) {
    d.months--;
  } else if (d.years) {
    d.years--;
  }
  let aligned = alignStart(date, duration, locale).subtract(d);
  return constrainStart(date, aligned, duration, locale, min, max);
}
function constrainStart(date, aligned, duration, locale, min, max) {
  if (min && date.compare(min) >= 0) {
    aligned = maxDate(aligned, alignStart(toCalendarDate(min), duration, locale));
  }
  if (max && date.compare(max) <= 0) {
    aligned = minDate(aligned, alignEnd(toCalendarDate(max), duration, locale));
  }
  return aligned;
}
function constrainValue(date, minValue, maxValue) {
  const dateOnly = toCalendarDate(date);
  const minOnly = minValue ? toCalendarDate(minValue) : void 0;
  const maxOnly = maxValue ? toCalendarDate(maxValue) : void 0;
  let constrainedDateOnly = dateOnly;
  if (minOnly) {
    constrainedDateOnly = maxDate(constrainedDateOnly, minOnly);
  }
  if (maxOnly) {
    constrainedDateOnly = minDate(constrainedDateOnly, maxOnly);
  }
  if (constrainedDateOnly.compare(dateOnly) === 0) {
    return date;
  }
  if ("hour" in date) {
    return date.set({
      year: constrainedDateOnly.year,
      month: constrainedDateOnly.month,
      day: constrainedDateOnly.day
    });
  }
  return constrainedDateOnly;
}
export {
  alignCenter,
  alignEnd,
  alignStart,
  constrainStart,
  constrainValue
};
