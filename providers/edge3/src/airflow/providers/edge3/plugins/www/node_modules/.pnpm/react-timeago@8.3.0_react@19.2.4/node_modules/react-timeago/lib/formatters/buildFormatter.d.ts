import type { Formatter } from '../types'
type StringOrFn = string | ((value: number, millisDelta: number) => string)
type NumberArray = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]
export type L10nsStrings = {
  prefixAgo?: null | undefined | StringOrFn
  prefixFromNow?: null | undefined | StringOrFn
  suffixAgo?: null | undefined | StringOrFn
  suffixFromNow?: null | undefined | StringOrFn
  second?: null | undefined | StringOrFn
  seconds?: null | undefined | StringOrFn
  minute?: null | undefined | StringOrFn
  minutes?: null | undefined | StringOrFn
  hour?: null | undefined | StringOrFn
  hours?: null | undefined | StringOrFn
  day?: null | undefined | StringOrFn
  days?: null | undefined | StringOrFn
  week?: null | undefined | StringOrFn
  weeks?: null | undefined | StringOrFn
  month?: null | undefined | StringOrFn
  months?: null | undefined | StringOrFn
  year?: null | undefined | StringOrFn
  years?: null | undefined | StringOrFn
  wordSeparator?: null | undefined | string
  numbers?: null | undefined | NumberArray
}
declare function buildFormatter(strings: L10nsStrings): Formatter
export default buildFormatter
