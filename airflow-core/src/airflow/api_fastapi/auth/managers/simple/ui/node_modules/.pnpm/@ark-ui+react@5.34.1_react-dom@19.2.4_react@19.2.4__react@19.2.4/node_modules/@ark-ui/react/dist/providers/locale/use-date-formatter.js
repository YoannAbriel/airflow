'use client';
import { DateFormatter } from '@internationalized/date';
import { useMemo } from 'react';
import { useLocaleContext } from './use-locale-context.js';

function useDateFormatter(props = {}) {
  const env = useLocaleContext();
  const locale = props.locale ?? env.locale;
  return useMemo(() => {
    const { locale: _, ...options } = props;
    return new DateFormatter(locale, options);
  }, [locale, props]);
}

export { useDateFormatter };
