import React, { FC } from 'react'
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
  return (
    <StyledAppContainer className="App">
      <CrossableCalendar />
    </StyledAppContainer>
  )
}

export default App
