import React, { useEffect, useState } from 'react'
import "./flowerlist.css"
import { Header } from './Header'
import { Link } from 'react-router-dom'

const url = "https://flowers-mock-data.firebaseio.com/flowers.json"

export const FlowerList = () => {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        let counter = 0;

        json.forEach(flower => {
          flower.id = counter;
          counter++;
        });

        setFlowers(json)
      })
  }, [])

  return (
    <div>
    <Header />
   
    
    <div className="flowerContainer">
      {flowers.map((flower) => (
        <div className="flowerPoster" key={flower.id}>
          <Link to={`/flowers/${flower.id}`}>
            <div className="titleRelease">
              <h1>{flower.common_name}</h1>
              <p>{flower.latin_name}</p>
            </div>
            <div>
              <img src={flower.cover_image} alt={flower.common_name} />
            </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}
