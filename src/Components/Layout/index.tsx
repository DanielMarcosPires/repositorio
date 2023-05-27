import { ReactNode } from "react";

type htmlChildren = {
    children:ReactNode;
}
export default function Layout({children}:htmlChildren) {
  return (
    <div>
        <h1>Cabecalho</h1>
        {children}
    </div>
  )
}
