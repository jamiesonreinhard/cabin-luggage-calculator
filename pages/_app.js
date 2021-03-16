import '../styles/globals.scss'
import React, { useState, useEffect } from 'react'
import getItems from '../services/services'
import airlines from '../data/airlines.json'

const airlineArray = Object.entries(airlines.airlines);

function MyApp({ Component, pageProps }) {
  const [selected, setSelected] = useState([]);
  const [sum, setSum] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [maxWeight, setMaxWeight] = useState(airlineArray[0][1].weight)

  useEffect(() => {
    getItems().then(res => {
      setItems(res.data.items)
      setIsLoaded(true);
    })
   }, [])

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
  }

  return(
    <Component 
      {...pageProps}
      selected={selected}
      addToSelected = {addToSelected}
      removeFromSelected = {removeFromSelected}
      sum={sum}
      items={items}
      isLoaded={isLoaded}
      maxWeight={maxWeight}
      airlineArray={airlineArray}
      updateMaxWeight={updateMaxWeight}
   />
  ) 
}

export default MyApp
