import { useState } from "react";
import style from "./scss/style.module.scss"
import "./scss/style.scss"




export default function Switch() {

  const [flipflop, setFlipflop] = useState(false);

  return (
    <div
      onClick={() => {
        setFlipflop(!flipflop)
      }}
      className={
        `
            ${
              style.Switch
            }
            ${
              flipflop ? `ligadoFundo` : `desligadoFundo`
            }
        `}>
      <span className={flipflop ? `ligado` : `desligado`}></span>
    </div>
  )
}
