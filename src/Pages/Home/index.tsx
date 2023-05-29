import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import style from './scss/style.module.scss'
export default function Home() {
    
  return (
    <>
    <section className={style.profile}>
      <div className={style.profileFundo}>
        <img className={style.profileImage} src="https://avatars.githubusercontent.com/u/89848369?v=4" alt="Perfil" />
        <div className={style.profileFundoInfo}>
          <h1>Daniel Marcos Pires</h1>
          <nav>
            <a href=""><BsGithub size={35} /></a>
            <a href=""><BsLinkedin size={35} /></a>
            <a href=""><BsInstagram size={35} /></a>
          </nav>
        </div>
      </div>
    </section>
    </>
  )
}
