import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import LoadSpinner from '../components/loadSpinner'
import AirlineDropdown from '../components/airlineDropdown'
import Link from 'next/link'

const Home = ({selected, addToSelected, removeFromSelected, sum, items, isLoaded, maxWeight, airlineArray, updateAirline, airline}) => {

  const itemList = items.map((item) => {
      return(
        <li key={item.name} onClick={() => {
          addToSelected(item);
        }}>
          <span>{item.name}</span>
          <div>
            <span className={styles.weight}>{item.weight}g</span>
            <span className={styles.arrow}>Add <AiOutlineArrowRight /></span>
          </div>
        </li>
      )
  })

  const selectedList = selected.map((item) => {
    return(
      <li key={item.name} onClick={() => removeFromSelected(item)}>
        <span>{item.name}</span>
        <div>
          <span className={styles.weight}>{item.weight}g</span>
          <span className={styles.arrow}>Remove <AiOutlineArrowLeft /></span>
        </div>
      </li>
    )
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Cabin Luggage Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        
        <AirlineDropdown airlineArray={airlineArray} updateAirline={updateAirline} />

        <div className={styles.cardDeck}>

          <div className={styles.card}>
            <h3>🛍 Inventory</h3>
            <hr /> 
            { isLoaded ? <ul>{itemList}</ul> : <LoadSpinner /> }
          </div>

          <FaArrowAltCircleRight size={36} style={{"marginTop": "150px", "color": "#f07979"}}/>

          <div className={styles.card}>
            <h3>✅ Selected</h3>
            <hr />
            <ul>
              {selected.length > 0 ? selectedList : <div style={{"textAlign":"center"}}>Nothing Selected</div>}
            </ul>
            <hr />
            <div className={styles.total} style={sum/1000 <= maxWeight ? {"color": "green"} : {"color": "red"}}>
              Total: {sum/1000}kg
            </div>
            <hr />
              <div className={styles.summary_cta}>
                { sum/1000 <= maxWeight ? 
                <Link href="/report">See Summary</Link> : 
                  <div>
                    <h4>Too Heavy!</h4>
                    <small>Remove some items to stay within {airline}'s limit.</small>
                    <br />
                    <br />
                    <small style={{"color": "black"}}><strong>Max: {maxWeight}kg</strong></small>
                  </div>
                }
              </div>
          </div>
          
        </div>
      </main>
    </div>
  )
}

export default Home;
