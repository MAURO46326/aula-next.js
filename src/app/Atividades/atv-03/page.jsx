'use client'

import { useState } from 'react';

import Botao from './botao';

import styles from './page.module.css';

function Exemplo04() {
    // O hook useState gerencia o valor do contador
    const [acao, setAcao] = useState("cadastrar");
    return (
        <div className={styles.container}>
            <h1>Atividade 3</h1>
            <h2>Ação selecionada: <span>{acao}</span></h2>

            <Botao texto="Cadastrar" aoClicar={() => setAcao('Cadastrar')}/>
            <Botao texto="Editar" aoClicar={() => setAcao("Editar")}/>
            <Botao texto="Listar" aoClicar={() => setAcao('Listar')}/>
            <Botao texto="Excluir" aoClicar={() => setAcao('Excluir')}/>
            <Botao texto="Cancelar" aoClicar={() => setAcao('Cancelar')}/>
        </div>
    );
}

export default Exemplo04;