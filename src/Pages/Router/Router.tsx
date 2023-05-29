import { Route, Routes } from 'react-router-dom'
import Home from '../Home'

const rotas = [
    {
        junim: "/",
        nome: "",
        element: <Home />
    }
];

export default function Rotas() {
    return (
        <Routes>
            {rotas.map((rotas, key) =>
                <Route
                    path={rotas.junim}
                    key={`rota${key}`}
                    element={rotas.element}
                />
            )}
        </Routes>
    )
}
