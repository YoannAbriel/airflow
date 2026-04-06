'use client';
import { jsx, Fragment } from 'react/jsx-runtime';
import { formatTime } from '@zag-js/i18n-utils';
import { useMemo } from 'react';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const FormatTime = (props) => {
  const { locale } = useLocaleContext();
  const text = useMemo(() => {
    const { value, ...intlOptions } = props;
    return formatTime(value, locale, intlOptions);
  }, [props, locale]);
  return /* @__PURE__ */ jsx(Fragment, { children: text });
};
FormatTime.displayName = "FormatTime";

export { FormatTime };
