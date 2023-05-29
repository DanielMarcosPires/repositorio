import { useEffect, useState } from "react";
import style from "./scss/style.module.scss"
import "./scss/style.scss"

type SwitchFunction={
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  referencia:React.RefObject<any>
  click: (event: string) => void
}

export default function Switch({referencia,click}:SwitchFunction) {

  const [flipflop, setFlipflop] = useState(false);
  useEffect(()=>{
    click(referencia.current.dataset.valor) 
  },[click, flipflop, referencia]);
  return (
    <div
      onClick={() => {
        setFlipflop(!flipflop);
        
      }}
      ref={referencia}
      data-valor={flipflop}
      className={
        `
            ${
              style.Switch
            }
            ${
              flipflop ? `ligadoFundo` : `desligadoFundo`
            }
        `}>
      <span  className={flipflop ? `ligado` : `desligado`}>{flipflop}</span>
    </div>
  )
}
