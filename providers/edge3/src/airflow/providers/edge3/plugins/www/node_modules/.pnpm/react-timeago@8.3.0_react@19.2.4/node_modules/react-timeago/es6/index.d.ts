import * as React from 'react'
export type { Formatter, Suffix, Unit } from './types'
export type Props = Readonly<{
  /** If the component should update itself over time */
  live?: boolean
  /** minimum amount of time in seconds between re-renders */
  minPeriod?: number
  /** Maximum time between re-renders in seconds. The component should update at least once every `x` seconds */
  maxPeriod?: number
  /** The container to render the string into. You could use a string like `span` or a custom component */
  component?: string | React.ComponentType<{}>
  /**
   * A title used for setting the title attribute if a <time> HTML Element is used.
   */
  title?: string
  /** A function to decide how to format the date.
   * If you use this, react-timeago is basically acting like a glorified setInterval for you.
   */
  formatter?: Formatter
  /** The Date to display. An actual Date object or something that can be fed to new Date */
  date: string | number | Date
  /** A function that returns what Date.now would return. Primarily for server
   * date: string | number | Date		 +   * rendering.
   */
  now?: () => number
}>
declare function TimeAgo($$PARAM_0$$: Props): null | React.JSX.Element
export default TimeAgo
