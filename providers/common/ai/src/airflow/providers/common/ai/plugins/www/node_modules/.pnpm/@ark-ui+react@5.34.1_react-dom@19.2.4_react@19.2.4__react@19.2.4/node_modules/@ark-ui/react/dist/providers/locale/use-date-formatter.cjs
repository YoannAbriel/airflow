'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const date = require('@internationalized/date');
const react = require('react');
const useLocaleContext = require('./use-locale-context.cjs');

function useDateFormatter(props = {}) {
  const env = useLocaleContext.useLocaleContext();
  const locale = props.locale ?? env.locale;
  return react.useMemo(() => {
    const { locale: _, ...options } = props;
    return new date.DateFormatter(locale, options);
  }, [locale, props]);
}

exports.useDateFormatter = useDateFormatter;
