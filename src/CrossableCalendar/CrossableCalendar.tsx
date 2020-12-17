import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import generateDaysInMonth from '../utils/generateDaysInMonth'

import Day from './Day'

interface CrossableCalendarProps {
  month: number
  year: number
  day: number
  onClickDay: (day: number) => void
  crossedDays: Set<number>
}

interface GridProps {
  numDaysInGrid: number
}

const Grid = styled.div<GridProps>`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  grid-template-rows: ${({ numDaysInGrid }) => {
    const rows = numDaysInGrid % 7
    return `repeat(${rows}, calc(100% / ${rows}))`
  }};
  align-items: stretch;
`

const CrossableCalendar: FC<CrossableCalendarProps> = ({
  month,
  year,
  day,
  onClickDay,
  crossedDays,
}) => {
  const arr: number[] = useMemo(() => generateDaysInMonth(month, year), [
    month,
    year,
  ])

  return (
    <Grid numDaysInGrid={arr.length}>
      {arr.map((n) => (
        <Day
          key={n}
          day={n}
          isCrossed={crossedDays.has(n)}
          isCurrentDay={n === day}
          onClickDay={onClickDay}
        />
      ))}
    </Grid>
  )
}

export default CrossableCalendar
