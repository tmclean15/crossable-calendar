export default function generateDaysInMonth(
  month: number,
  year: number
): number[] {
  const daysInMonth: number[] = []

  // the zero-based day of the week that the first day of the month is
  const dayOfWeek = new Date(year, month).getDay()

  // the number of days in the given month
  const numDaysInMonth: number = new Date(year, month + 1, 0).getDate()

  // Zeroes will refer to unused days in the calendar for the month
  for (let i = 0; i < dayOfWeek; i++) {
    daysInMonth.push(0)
  }

  for (let i = 1; i <= numDaysInMonth; i++) {
    daysInMonth.push(i)
  }

  const remaining = 7 - (daysInMonth.length % 7)
  const remainingDaysInGrid = remaining === 7 ? 0 : remaining

  for (let i = 0; i < remainingDaysInGrid; i++) {
    daysInMonth.push(0)
  }

  return daysInMonth
}
