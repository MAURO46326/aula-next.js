import Image from "next/image";
import styles from "./estilizacao/reset.css";

function Home() {
  return (
    <div>
      <h1>React com Next JS</h1>
      <h2>aula de introdução</h2>
      <h3>leiaute e estilização</h3>
      <p>nesta aula iremos entender o uso de CSS global e local.</p>
      </div>
  );
}

const home2 = () =>{
  return(
  <div>
      <h1>React com Next JS 2</h1>
      <h2>aula de introdução</h2>
      <h3>leiaute e estilização</h3>
      <p>nesta aula iremos entender o uso de CSS global e local.</p>
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