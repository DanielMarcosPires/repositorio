import style from './scss/style.module.scss'
import './scss/style.scss'

import { ReactNode, useRef, useState } from "react";

import { BiBell } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'

import Switch from '../Switch';


type htmlChildren = {
  children: ReactNode;
}

export default function Layout({ children }: htmlChildren) {

  const [darkMode, setDarkMode] = useState(false)
  const reference = useRef(null);

  function handleClick(e: string) {
    if (e === "false") {
      return setDarkMode(false)
    }
    return setDarkMode(true)
  }
  
  return (
    <main className={` ${style.LayoutGrid} ${darkMode ? `lightMode` : `darkMode`}`}>
      <header className={
        `
            ${style.LayoutGridCabecalho}
            ${darkMode ? 'cabecalhoLightMode' : 'cabecalhoDarkMode'}
            `}>
        <div className={style.LayoutGridCabecalhoMargem}>
          <h2 className={style.Title}>Repositório</h2>
          <nav className={darkMode ? 'navLightMode' : 'navDarkMode'}>
            <Switch click={handleClick} referencia={reference} />
            <BiBell size={40} />
            <p>perfil</p>
          </nav>
        </div>
      </header>
      <aside className={
        `
            ${style.LayoutGridSideBar}
            ${darkMode ? 'sideBarLightMode' : 'sideBarDarkMode'}
            `
      }>
        <RxCross2 size={50} />
        <nav>
          <a href="#">Home</a>
        </nav>
      </aside>
      {children}
    </main>
  )
}
