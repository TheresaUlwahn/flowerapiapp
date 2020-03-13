import React, { useEffect, useState } from 'react'
import "./flowerlist.css"
import { Link } from 'react-router-dom'

const url = "https://flowers-mock-data.firebaseio.com/flowers.json"

export const FlowerList = () => {
  const [flowers, setFlowers] = useState([])

useEffect(() => {
  fetch(url)
  // fetch('https://api.themoviedb.org/3/movie/popular?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US&page=1')
    .then((res) => res.json())
    .then((json) => {
      setFlowers(json)
      // console.log(json)
    })
}, [])
// console.log(flowers)

// function goBack() {
//     window.history.back();
//   }  
// const fl = flowers
// console.log(fl[0].blooming_season)
  return (
  
    <div className="flowerContainer">
      
      <p>Blooming season {flowers.length}</p>     
              
      {flowers.map((flower) => (
        <div className="flowerPoster" key={flower._id.oid}> 
        {/* alert({flower._id.oid}) */}
          <Link to={`/flowers/${flower._id.oid}`}>
            <div className="titleRelease">
             <p>{flower.common_name}</p>
              <p>Blooming season {flower.blooming_season}</p>
            </div>
            <div>
              <img src={flower.cover_image} alt={flower.latin_name} />  
            </div>
          </Link>
        </div>
      ))}  
    </div>
  )
}
