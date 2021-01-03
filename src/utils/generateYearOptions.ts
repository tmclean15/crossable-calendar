interface YearOptions {
  value: number
  text: string
}

export default function generateYearOptions(year: number): YearOptions[] {
  const years = []

  for (let i = year - 10; i < year + 10; i++) {
    years.push(i)
  }

  return years.map((currentYear) => ({
    value: currentYear,
    text: currentYear.toString(),
  }))
}
