import React, { FC, useState } from 'react'
import styled from 'styled-components'

import CrossableCalendar from './CrossableCalendar'

const StyledAppContainer = styled.div`
  height: 50vh;

  @media (min-width: 569px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`

const App: FC = () => {
  const [crossedDays, setCrossedDays] = useState(new Set<number>())

  const handleClickDay = (day: number) => {
    setCrossedDays(() => {
      if (crossedDays.has(day)) {
        const tmp = new Set([...crossedDays])
        tmp.delete(day)
        return tmp
      }
      return new Set([...crossedDays, day])
    })
  }

  return (
    <StyledAppContainer className="App">
      <CrossableCalendar
        month={11}
        year={2020}
        day={17}
        onClickDay={handleClickDay}
        crossedDays={crossedDays}
      />
    </StyledAppContainer>
  )
}

export default App
