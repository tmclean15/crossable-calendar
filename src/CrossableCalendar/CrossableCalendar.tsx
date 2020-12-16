import React, { FC } from 'react'
import styled from 'styled-components'

import Day from './Day'

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  align-items: stretch;
`

const CrossableCalendar: FC = () => {
  const arr: number[] = [...Array(10).keys()]

  return (
    <Grid>
      {arr.map((n) => (
        <Day key={n} day={n} isCrossed={true} isCurrentDay={false} />
      ))}
    </Grid>
  )
}

export default CrossableCalendar
