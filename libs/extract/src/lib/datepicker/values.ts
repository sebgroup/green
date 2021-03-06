import { CalendarHeader } from './calendar'

const _paddedString = (num: number) => (num < 10 ? '0' + num : '' + num)

const _format = (
  date: Date,
  options: Intl.DateTimeFormatOptions,
  locale: string
) => {
  const string = Intl.DateTimeFormat(locale, options).format(date)
  return string[0].toUpperCase() + string.substring(1)
}

interface DateTimeFormatOptions {
  locale: string
}

type Days = [Day, Day, Day, Day, Day, Day, Day]
interface Day {
  long: string
  short: string
}
export const weekdays = (locale = navigator.language): Days => {
  // eslint-disable-next-line no-sparse-arrays
  const week = Array(7)
    .fill(null)
    .map((_, day) => {
      const date = new Date(`1970-01-${12 + day}`)
      return {
        long: _format(date, { weekday: 'long' }, locale),
        short: _format(date, { weekday: 'short' }, locale),
      }
    })
  return week as Days
}

type MonthFormat = 'long' | 'narrow' | 'short' | 'numeric' | '2-digit'
export interface MonthFormatOptions extends DateTimeFormatOptions {
  format: MonthFormat
}
export interface Month {
  key: string
  value: number
}
type Months = [
  Month,
  Month,
  Month,
  Month,
  Month,
  Month,
  Month,
  Month,
  Month,
  Month,
  Month,
  Month
]

export const months = ({
  locale = navigator.language,
  format = 'long',
}: Partial<MonthFormatOptions>): Months => {
  const months = Array(12)
    .fill(null)
    .map((_, month) => ({
      key: _format(
        new Date(`1970-${_paddedString(month + 1)}-01`),
        { month: format },
        locale
      ),
      value: month,
    }))
  return months as Months
}

export const years = ({
  from = new Date().getFullYear() - 5,
  to = new Date().getFullYear() + 5,
}: Partial<{
  from: number
  to: number
}>): Array<{ key: string; value: number }> => {
  const years = Array(to - from + 1)
    .fill(null)
    .map((_, year) => ({
      key: from + year + '',
      value: from + year,
    }))
  return years
}

/** Get weekday
 * @param date - Date to get weekday for
 * @param startDay - Start day of week, 6 by default = monday, 0 = sunday
 * @return number - Number for weekday from start of week
 */
export const getWeekday = (date: Date, startDay = 6) =>
  (date.getDay() + startDay) % 7

/** Get name for week - used when week numbers are displayed
 * @param {
 *    locale?: string,
 *    weekName?: Partial<CalendarHeader>
 * } - Config object with optional locale and calendar header
 * @return CalendarHeader - Calendar header used for week numbers
 */
export const getNameForWeek = ({
  locale,
  weekName,
}: {
  locale: string
  weekName: { abbr: string; displayText: string }
}): CalendarHeader => {
  const calendarHead: Partial<CalendarHeader> = { type: 'week' }
  // check if swedish locale...
  if (/^sv/.test(locale)) {
    // ...return default header for swedish locale...
    return <CalendarHeader>{ ...calendarHead, abbr: 'Vecka', displayText: 'v.' }
  }
  // ...else return passed week name which defaults to english if omitted
  return <CalendarHeader>{ ...calendarHead, ...weekName }
}
