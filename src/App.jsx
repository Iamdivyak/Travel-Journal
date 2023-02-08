import React from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Main from './components/Main'
import data from "./components/data.jsx"




function App() {
  const cards = data.map((card)=>{
    return (<Main
      title= {card.title}
      location= {card.location}
      googleMapsUrl= {card.googleMapsUrl}
      startDate= {card.startDate}
      endDate= {card.endDate}
      description= {card.description}
      imageUrl= {card.imageUrl}
    />)
  })


console.log(cards)
  return (
    <div className="App">
      <Navbar />
      {cards}
        
    </div>
  )
}

export default App
