import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import generateDaysInMonth from '../utils/generateDaysInMonth'

import Day from './Day'
import TopBar from './TopBar'

interface CrossableCalendarProps {
  month: number
  year: number
  day: number | null
  onClickDay: (day: number) => void
  onClickForward: () => void
  onClickBack: () => void
  onToggleMonth: (month: number) => void
  onToggleYear: (year: number) => void
  crossedDays: Set<number>
}

interface GridProps {
  numDaysInGrid: number
}

const StyledGrid = styled.div<GridProps>`
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

const StyledDayOfWeek = styled.div`
  border: 1px solid black;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const CrossableCalendar: FC<CrossableCalendarProps> = ({
  month,
  year,
  day,
  crossedDays,
  onClickDay,
  onClickForward,
  onClickBack,
  onToggleMonth,
  onToggleYear,
}) => {
  const arr: number[] = useMemo(() => generateDaysInMonth(month, year), [
    month,
    year,
  ])

  return (
    <>
      <TopBar
        month={month}
        year={year}
        onClickBack={onClickBack}
        onClickForward={onClickForward}
        onToggleMonth={onToggleMonth}
        onToggleYear={onToggleYear}
      />
      <StyledGrid numDaysInGrid={arr.length}>
        {daysOfWeek.map((day) => (
          <StyledDayOfWeek key={day}>{day}</StyledDayOfWeek>
        ))}
        {arr.map((n, index) => (
          <Day
            key={index}
            day={n}
            isCrossed={crossedDays.has(n)}
            isCurrentDay={n === day}
            onClickDay={onClickDay}
          />
        ))}
      </StyledGrid>
    </>
  )
}

export default CrossableCalendar
