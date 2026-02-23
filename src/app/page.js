import Image from "next/image";
import styles from "./page.module.css";

function Home() {
  return (
    <div>
      <h1>React com Next JS</h1>
      </div>
  );
}

const home2 = () =>{
  return(
  <div>
      <h1>React com Next JS 2</h1>

      <card/>
      </div>
  )
}

const card = () =>{
  return(
  <div>
      <h3>aula introdução</h3>
      <h3>aula estilização</h3>
      <h3>aula componentes</h3>
      </div>
  )
}
export default home2;