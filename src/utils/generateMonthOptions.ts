interface MonthOptions {
  value: number
  text: string
}

export default function generateMonthOptions(month: number): MonthOptions[] {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return months.map((currentMonth, index) => ({
    value: index,
    text: currentMonth,
  }))
}
