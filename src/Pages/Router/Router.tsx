import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Layout from '../../Components/Layout'
import { useState } from 'react'




    

export default function Rotas() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <>
        <Routes>
            <Route path='/' element={<Layout extracao={setDarkMode}/>}>
                    <Route path="/"  element={<Home darkmode={darkMode} />} />
            </Route>
        </Routes>
        </>
    )
}
