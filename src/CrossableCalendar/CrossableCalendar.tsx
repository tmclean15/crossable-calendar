import React, { FC } from 'react'
import styled from 'styled-components'

import Day from './Day'

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  grid-template-rows: repeat(5, calc(100% / 5));
  align-items: stretch;
`

const CrossableCalendar: FC = () => {
  const arr: number[] = [...Array(10).keys()]

  return (
    <Grid>
      {arr.map((n) => (
        <Day key={n} day={n} isCrossed={true} isCurrentDay={true} />
      ))}
    </Grid>
  )
}

export default CrossableCalendar
