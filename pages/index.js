import React, { useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import getItems from '../services/services'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import LoadSpinner from '../components/loadSpinner'
import airlines from '../data/airlines.json'

const airlineArray = Object.entries(airlines.airlines);
console.log(airlineArray);
console.log(airlineArray[0][1].weight);


export default function Home() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [sum, setSum] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false)
  const [maxWeight, setMaxWeight] = useState(airlineArray[0][1].weight)

  useEffect(() => {
   getItems().then(res => {
     setItems(res.data.items)
     setIsLoaded(true);
   })
  }, [])

  const airlineList = airlineArray.map(airline => {
    return(
      <option value={airline[1].weight} key={airline[0]}>{airline[1].name}</option>
    )
  })

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

  const addToSelected = (item) => {
    let currentSum = sum;
    setSelected([...selected, item])
    setItems(items.filter(currentItem => currentItem.name !== item.name))
    setSum(currentSum += item.weight)
  }

  const removeFromSelected = (item) => {
    let currentSum = sum;
    setSelected(selected.filter(currentSelected => currentSelected.name !== item.name))
    setItems([...items, item])
    setSum(currentSum -= item.weight)
  }

  const updateMaxWeight = (weight) => {
    setMaxWeight(weight)
    console.log(maxWeight);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
      <select onChange={(e) => updateMaxWeight(e.target.value)}>
        <option selected="selected">Airline</option>
        {airlineList}
      </select>
        <div className={styles.cardDeck}>
          <div className={styles.card}>
            <h3>Inventory</h3>
            <hr /> 
            { isLoaded ? <ul>{itemList}</ul> : <LoadSpinner /> }
          </div>
          <AiOutlineArrowRight />
          <div className={styles.card}>
            <h3>Selected</h3>
            <hr />
              <ul>
                {selectedList}
              </ul>
            <hr />
              <div className={styles.total} style={sum/1000 <= maxWeight ? {"color": "green"} : {"color": "red"}}>
                Total: {sum/1000}kg
              </div>
            <hr />
            <button>See Summary</button>
          </div>
        </div>
      </main>
    </div>
  )
}
