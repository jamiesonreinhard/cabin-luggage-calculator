import React, { useState } from 'react'
import styles from '../styles/Home.module.scss'
import { BiDownArrow } from 'react-icons/bi'
import { IoMdCloseCircle } from 'react-icons/io'

const AirlineDropdown = ({updateAirline, airlineArray}) => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(null)

  const handleClick = (airline) => {
    updateAirline(airline);
    setActive(airline);
  }

  const airlineList = airlineArray.map(airline => {
    return(
      <div className={active == airline ? `${styles.dd_item} ${styles.activeAirline}` : `${styles.dd_item}`} key={airline[0]} onClick={() => handleClick(airline)}>
        {airline[1].name}
      </div>
    )
  })

  return(
    <div className={styles.customSelect}>
      <div className={styles.dd_toggler} onClick={() => setShow(!show)}>
        Airlines {show ? <IoMdCloseCircle /> : <BiDownArrow />}
      </div>
      <div className={styles.airlineList}>
      { show ? airlineList : ""}
      </div>
    </div>
  )
}

export default AirlineDropdown;