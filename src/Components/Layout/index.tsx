import style from './scss/style.module.scss'
import { ReactNode } from "react";

type htmlChildren = {
    children:ReactNode;
}
export default function Layout({children}:htmlChildren) {
  return (
    <main className={style.LayoutGrid}>
           <header className={style.LayoutGridCabecalho}>
                <div className={style.LayoutGridCabecalhoMargem}>
                    <h1>Logo</h1>
                    <div>
                        <p>switch</p>
                        <p>notificação</p>
                        <p>perfil</p>
                    </div>
                </div>
           </header>
           <aside className={style.LayoutGridSideBar}>
            <h1>close</h1>
                <nav>
                    <a href="#">Home</a>
                </nav>
           </aside>
           <h1>Repositorio</h1>
    </main>
  )
}
