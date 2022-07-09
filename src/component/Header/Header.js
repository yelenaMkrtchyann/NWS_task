import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css"

function Header() {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/categories", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json, text/html'
            }
        }).then(resp => {
            console.log(resp);
            setCategories(resp.data)
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
        <>
            <div className="header_menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {
                        categories.map(category => {
                            return <li key={category.id} onClick={() => navigate(`/cats/${category?.id}`)}>
                                {category?.name}
                            </li>
                        })
                    }
                </ul>
            </div>

        </>
    );
}

export default Header;
