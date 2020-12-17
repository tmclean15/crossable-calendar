import React, { FC } from 'react'
import styled from 'styled-components'

interface DayProps {
  day: number
  isCrossed: boolean
  isCurrentDay: boolean
  onClickDay: (day: number) => void
}

interface StyledDayProps {
  isCrossed: boolean
  isCurrentDay: boolean
}

const StyledDay = styled.div<StyledDayProps>`
  height: auto;
  #day {
    padding: 5px;
  }
  background-color: ${(props) => (props.isCrossed ? 'red' : 'white')};
  border: ${(props) => (props.isCurrentDay ? '2px solid blue' : 'none')};
`

const Day: FC<DayProps> = ({ day, isCrossed, isCurrentDay, onClickDay }) => {
  return (
    <StyledDay
      isCrossed={isCrossed}
      isCurrentDay={isCurrentDay}
      onClick={() => onClickDay(day)}
    >
      <div id="day">{day}</div>
    </StyledDay>
  )
}

export default Day
