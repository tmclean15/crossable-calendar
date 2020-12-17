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
  border: ${(props) =>
    props.isCurrentDay ? '3px solid blue' : '1px solid black'};
`

const Day: FC<DayProps> = ({ day, isCrossed, isCurrentDay, onClickDay }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (day === 0) {
      event.preventDefault()
      return
    }
    onClickDay(day)
  }

  return (
    <StyledDay
      isCrossed={isCrossed}
      isCurrentDay={isCurrentDay}
      onClick={handleClick}
    >
      <div id="day">{day === 0 ? null : day}</div>
    </StyledDay>
  )
}

export default Day
