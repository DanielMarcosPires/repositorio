import { useState } from "react";
import style from "./scss/style.module.scss"
import "./scss/style.scss"



export default function Switch({obter}:any) {

  const [flipflop,setFlipflop] = useState(false);
  

  function handleClick(){
    obter(flipflop)
  }

  return (
    <div
    onClick={()=>{
      setFlipflop(!flipflop)
      handleClick()
    }}
    className={
      `
       ${style.Switch}
       ${flipflop ? `ligadoFundo`:`desligadoFundo`}
      `}>
        <span className={flipflop ? `ligado`:`desligado`}></span>
    </div>
  )
}
