import React, { FC } from 'react'
import styled from 'styled-components'

import { generateMonthOptions, generateYearOptions } from '../utils'

interface TopBarProps {
  onClickForward: () => void
  onClickBack: () => void
  onToggleMonth: (month: number) => void
  onToggleYear: (year: number) => void
  month: number
  year: number
}

const StyledTopBar = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  select {
    margin: 0 1rem;
  }
`

const TopBar: FC<TopBarProps> = ({
  onClickForward,
  onClickBack,
  onToggleMonth,
  onToggleYear,
  month,
  year,
}) => {
  const monthOptions = generateMonthOptions(month)
  const yearOptions = generateYearOptions(year)

  const handleToggleMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onToggleMonth(parseInt(event.target.value, 10))
  }

  const handleToggleYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onToggleYear(parseInt(event.target.value, 10))
  }

  return (
    <StyledTopBar>
      <button onClick={onClickBack}>{'<'}</button>
      <div id="select">
        <select
          name="month"
          aria-label="month-select"
          onChange={handleToggleMonth}
          value={month}
        >
          {monthOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <select
          name="year"
          aria-label="year-select"
          onChange={handleToggleYear}
          value={year}
        >
          {yearOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onClickForward}>{'>'}</button>
    </StyledTopBar>
  )
}

export default TopBar
