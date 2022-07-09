import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./home.css"
function Home() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json, text/html'
      }
    }).then(resp => {
      console.log(resp);
      setCats(resp.data)
    }).catch(error => {
      if (error.request) {
        console.log("error.request", error.request);
      } else if (error.response) {
        console.log('error.response', error.response);
      } else if (error.message) {
        console.log('error.mes', error.message);
      }
    })
  }, [])

  return (
    <div className='home_cats'>
      {cats.map(cat => {
        return ( <div>
          <img src={cat?.url} width="100%" />
        </div>
        )
      })}
    </div>
  )
}

export default Home