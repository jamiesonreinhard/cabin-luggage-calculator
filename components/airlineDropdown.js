import React from 'react'

const AirlineDropdown = ({updateMaxWeight, airlineArray}) => {

  const airlineList = airlineArray.map(airline => {
    return(
      <option value={airline[1].weight} key={airline[0]}>{airline[1].name}</option>
    )
  })

  return(
    <select onChange={(e) => updateMaxWeight(e.target.value)}>
      <option value="selected">Select an Airline</option>
      {airlineList}
    </select>
  )
}

export default AirlineDropdown;