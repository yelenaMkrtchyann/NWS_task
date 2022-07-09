import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cats from "../container/Cats/Cats"
import Home from "../container/Home/Home"
import Header from "./Header/Header"

function Router() {
    return <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cats/:id" element={<Cats />}></Route>
            </Routes>
        </BrowserRouter>
    </>
}

export default Router