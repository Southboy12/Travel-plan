import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import data from './data'


export default function App() {
    const cards = data.map((card, index) => {
        return <Hero 
                key={index}
                item={card}
                // title={card.title}  
                // description={card.description}
                // location={card.location}
                // googleLink={card.googleMapsLink}
                // startDate={card.startDate}
                // endDate={card.endDate}
                // img={card.imageUrl} 
                />
    })
    return (
        <div className='container'>
            <Navbar />
            {cards}
        </div>
    )
}