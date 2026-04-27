'use client'

import { useState } from 'react';

import styles from './page.module.css';

export default function FormComponent() {

    const [produto, setproduto] = useState('');
    const [qtd, setqtd] = useState('');

    const [historico, setHistorico] = useState([]);
    const [editando, setEditando] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (produto && qtd) {
            if (editando !== null) {
                const novoHistorico = historico.map(item =>
                    item.id === editando
                        ? { ...item, produto, qtd }
                        : item
                );
                setHistorico(novoHistorico);
                setEditando(null);
            } else {
                const novaEntrada = {
                    id: Date.now(),
                    produto,
                    qtd
                };
                setHistorico([...historico, novaEntrada]);
            }
            setproduto('');
            setqtd('');
        }
    };

    const handleEditar = (item) => {
        setproduto(item.produto);
        setqtd(item.qtd);
        setEditando(item.id);
    };

    const handleExcluir = (id) => {
        setHistorico(historico.filter(item => item.id !== id));
    };




    return (
        <div className={styles.container}>

            <h1>Atividade 4 - Compras</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    name="produto"
                    type="text"
                    placeholder='Produto'
                    value={produto}
                    onChange={e => setproduto(e.target.value)}
               
                />
                <input
                    name="quantidade"
                    type="number"
                    placeholder='Quantidade'
                    value={qtd}
                    onChange={e => setqtd(e.target.value)}
                
                />
                <button type="submit">{editando !== null ? 'Atualizar' : 'Enviar'}</button>
            </form>

            <div className={styles.historico}>
                <h3>Carrinho de Compras</h3>
                
                {
                    historico.map( item => 
                        <div key={item.id} className={styles.item}>
                            <p>{item.produto} - {item.qtd}x</p>
                            <div className={styles.botoes}>
                                <button 
                                    className={styles.editar}
                                    onClick={() => handleEditar(item)}
                                >
                                    ✏️ Editar
                                </button>
                                <button 
                                    className={styles.excluir}
                                    onClick={() => handleExcluir(item.id)}
                                >
                                    X Excluir
                                </button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
}