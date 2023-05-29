import style from './scss/style.module.scss'
import './scss/style.scss'

import { ReactNode, useState } from "react";

import {BiBell} from 'react-icons/bi'

import Switch from '../Switch';
import { Outlet } from 'react-router-dom';


type htmlChildren = {
    children:ReactNode;
}
type JSXvalor ={
    obterDarkMode:(e:boolean)=>void
}

export default function Layout({children}:htmlChildren) {

  const [darkMode, setDarkMode] = useState(false)
    
    

  return (
    <main
    className={
        `
        ${style.LayoutGrid}
        ${darkMode? `darkMode`:`lightMode`}
        `
    }
    >
           <header className={style.LayoutGridCabecalho}>
                <div className={style.LayoutGridCabecalhoMargem}>
                    <h1>Logo</h1>
                    <nav>
                        <Switch />
                        <BiBell size={40} className={darkMode? `darkMode`:`lightMode`}/>
                        <p>perfil</p>
                    </nav>
                </div>
           </header>
           <aside className={style.LayoutGridSideBar}>
               <h1>Close</h1>
                <nav>
                    <a href="#">Home</a>
                </nav>
           </aside>
           {children}
    </main>
  )
}
