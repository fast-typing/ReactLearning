import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

export default function App() {
    const cards = data.map(item => {
        return <Card
            key={item.imageUrl}
            {...item}
        />
    })
    
    return (
        <>
            <Header />
            {cards}
        </>
    )
}