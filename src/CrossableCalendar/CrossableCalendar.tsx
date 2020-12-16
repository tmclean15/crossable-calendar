import React, { FC } from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
`

const CrossableCalendar: FC = () => {
  const arr: number[] = [...Array(10).keys()]

  return (
    <Grid>
      {arr.map((n) => (
        <div key={n}>{`Test ${n}`}</div>
      ))}
    </Grid>
  )
}

export default CrossableCalendar
