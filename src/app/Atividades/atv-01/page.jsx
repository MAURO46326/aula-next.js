import Link from "next/link";

import styles from "./page.module.css";

function atividade01 () {
    return(
        <div class={styles.containeratv1}>
            <h1>Atividade 01</h1>
            <p class={styles.paragrafo}>A curiosidade é uma das forças mais poderosas do ser humano. Desde cedo, somos movidos pelo desejo de entender o mundo ao nosso redor: por que o céu muda de cor ao entardecer, como as plantas crescem ou de que forma as ideias surgem em nossa mente. Essa busca constante por respostas é o que impulsiona descobertas, inovações e novas maneiras de enxergar a realidade.

Ao longo da história, grandes avanços nasceram de perguntas simples. Quando alguém decide observar com atenção, experimentar algo diferente ou desafiar uma ideia já aceita, abre-se a porta para o conhecimento. Por isso, cultivar a curiosidade é também cultivar o aprendizado.

Em um mundo em constante transformação, manter a mente aberta e o desejo de aprender é essencial. Cada nova informação, cada experiência e cada conversa podem ampliar nossa visão e ajudar a construir um futuro mais criativo, consciente e cheio de possibilidades.</p>
        </div>
    )
}

export default atividade01;