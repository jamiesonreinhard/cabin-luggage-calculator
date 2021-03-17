import React from 'react'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Typed from 'react-typed'
import Head from 'next/head'

const Report = ({selected, sum, airline}) => {
  
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
    <>
    <Head>
        <title>Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.container}>
      <h2>{airline}</h2>
      <div className={styles.card}>
        <h3>🎒 My Backpack</h3>
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
      <Typed style={{"marginTop": "30px"}}
        strings={[
            'Please Hire Me',
            'I Will Work Hard',
            'Weekendr Will Thrive',
            'Soon We Will Travel Again']}
            typeSpeed={80}
            backSpeed={50}
            loop >
        </Typed>
    </div>
    </>
  )
}

export default Report;