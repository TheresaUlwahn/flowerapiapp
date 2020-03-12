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
      setFlowers(json.flowers)
      console.log(json)
    })
}, [])

// function goBack() {
//     window.history.back();
//   }  

  return (
      
    <div className="flowerContainer">
      {/* {flowers.map((flower) => (
        <div className="flowerPoster" key={flowers._id}> 
          {/* <Link to={`/flowers/${flower._id}`}> */}
            {/* <div className="titleRelease">
              <h1>{flowers.common_name}</h1> */}
              {/* <p>Released {flowers.release_date}</p> */}
            {/* </div>
            <div> */}
              {/* <img src={`https://image.tmdb.org/t/p/w342${flower.poster_path}`} alt={flower.latin_name} />   */}
            {/* </div> */}
          {/* </Link> */}
        {/* </div>
      ))}  */} 
    </div>
  )
}
