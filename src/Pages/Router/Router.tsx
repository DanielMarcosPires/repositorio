import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Layout from '../../Components/Layout'




    

export default function Rotas() {

    return (
        <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                    <Route path="/"  element={<Home />} />
            </Route>
        </Routes>
        </>
    )
}
