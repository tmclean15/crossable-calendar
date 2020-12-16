import React, { FC } from 'react'
import styled from 'styled-components'

interface DayProps {
  day: number
  isCrossed: boolean
  isCurrentDay: boolean
}

interface StyledDayProps {
  isCrossed: boolean
  isCurrentDay: boolean
}

const StyledDay = styled.div<StyledDayProps>`
  height: calc(100% / 5);
  #day {
    padding: 5px;
  }
  background-color: ${(props) => (props.isCrossed ? 'red' : 'white')};
  border: ${(props) => (props.isCurrentDay ? '2px solid blue' : 'none')};
`

const Day: FC<DayProps> = ({ day, isCrossed, isCurrentDay }) => {
  return (
    <StyledDay isCrossed={isCrossed} isCurrentDay={isCurrentDay}>
      <div id="day">{day}</div>
    </StyledDay>
  )
}

export default Day
