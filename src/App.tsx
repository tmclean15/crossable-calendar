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

const today = new Date()

const App: FC = () => {
  const [crossedDays, setCrossedDays] = useState(new Set<number>())
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [day, setDay] = useState<number | null>(today.getDate())

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

  const updateDay = () => {
    if (month === today.getMonth() && year === today.getFullYear()) {
      setDay(today.getDate())
      return
    }
    setDay(null)
  }

  const handleClickBack = () => {
    if (month === 0) {
      setMonth(11) // December
      setYear(year - 1)
      updateDay()
      return
    }
    setMonth(month - 1)
    updateDay()
  }

  const handleClickForward = () => {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)
      updateDay()
      return
    }
    setMonth(month + 1)
    updateDay()
  }

  const handleToggleMonth = (month: number) => {
    setMonth(month)
    updateDay()
  }

  const handleToggleYear = (year: number) => {
    setYear(year)
    updateDay()
  }

  return (
    <StyledAppContainer className="App">
      <CrossableCalendar
        month={month}
        year={year}
        day={day}
        onClickDay={handleClickDay}
        crossedDays={crossedDays}
        onClickBack={handleClickBack}
        onClickForward={handleClickForward}
        onToggleMonth={handleToggleMonth}
        onToggleYear={handleToggleYear}
      />
    </StyledAppContainer>
  )
}

export default App
