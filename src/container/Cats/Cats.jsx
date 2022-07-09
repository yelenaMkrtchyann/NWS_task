import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import"./cats.css"
function Cats() {
    const [cats, setCats] = useState([])
    const params = useParams()
    useEffect(() => { 
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=" + params.id, {
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
    }, [params])
    return (
        <div className='cats'>
            {cats.map(cat => {
                return (<div key={cat?.id}>
                    <img src={cat?.url} width="100%" />
                </div>)
            })}
        </div>
    )
}

export default Cats