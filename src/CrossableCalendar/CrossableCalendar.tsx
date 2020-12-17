import React, { FC } from 'react'
import styled from 'styled-components'

import Day from './Day'

interface Props {
  month: number
  year: number
  day: number
  onClickDay: (day: number) => void
  crossedDays: Set<number>
}

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  grid-template-rows: repeat(5, calc(100% / 5));
  align-items: stretch;
`

const CrossableCalendar: FC<Props> = ({
  month,
  year,
  day,
  onClickDay,
  crossedDays,
}) => {
  const arr: number[] = [...Array(35).keys()]

  return (
    <Grid>
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
