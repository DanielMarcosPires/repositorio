import { Route, Routes } from 'react-router-dom'
import Layout from '../../Components/Layout'
import Home from '../Home'

export default function Rotas() {
    
    return (
        <>
            <Layout>
                <Routes>
                    <Route index element={<Home />}/>
                </Routes>
            </Layout>
        </>
    )
}
