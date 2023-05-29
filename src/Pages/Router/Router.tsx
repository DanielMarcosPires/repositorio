import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Layout from '../../Components/Layout';
import { JSX } from 'react/jsx-runtime';


class Caminho {
    rotas: { path: string; Element: JSX.Element; }[];
    constructor(rotas: { path: string; name: string; Element: JSX.Element; }[]) {
        this.rotas = rotas
    }
}



const caminho = new Caminho([])

export default function Rotas() {
    
    caminho.rotas=[{path:"/",Element:<Home/>}]

    return (
        <>
            <Layout>
                <Routes>
                    {
                        caminho.rotas.map((rotas,index)=>
                         <Route path={rotas.path} key={`Rota:${index}`} element={rotas.Element} />
                        )
                    }
                </Routes>
            </Layout>
        </>
    )
}
