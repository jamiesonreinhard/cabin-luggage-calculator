import React from 'react'
import styles from '../styles/Home.module.scss'

const AirlineDropdown = ({updateAirline, airlineArray}) => {

  const airlineList = airlineArray.map(airline => {
    return(
      <option value={JSON.stringify(airline[1])} key={airline[0]}>{airline[1].name}</option>
    )
  })

  return(
    <div className={styles.customSelect}>
      <select style={{"width":"200px"}, {"-webkit-appearance": "none"}} onChange={(e) => updateAirline(e.target.value)}>
      <option value="selected">Select an Airline</option>
      {airlineList}
    </select>
    </div>
  )
}

export default AirlineDropdown;