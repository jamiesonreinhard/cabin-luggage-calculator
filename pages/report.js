import React from 'react'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const Report = ({selected, sum, maxWeight}) => {
  
  const selectedList = selected.map((item) => {
    return(
      <li key={item.name} onClick={() => removeFromSelected(item)}>
        <span>{item.name}</span>
        <div>
          <span className={styles.weight} style={{"display": "block"}}>{item.weight}g</span>
        </div>
      </li>
    )
  })
  
  return(
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>My Backpack</h3>
        <hr />
          <ul>
            {selectedList}
          </ul>
        <hr />
          <div className={styles.total}>
            Total: {sum/1000}kg
          </div>
          <div className={styles.summary_cta}>
            <Link href="/">Back to Home</Link>
          </div>
      </div>
    </div>
  )
}

export default Report;