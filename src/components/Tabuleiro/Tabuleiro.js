import { View } from 'react-native';
import Celula from '../Celula/Celula';
import styles from './Styles';


import { useEffect, useState } from 'react';

export default function Tabuleiro() {

  const [tabuleiro, setTabuleiro] = useState(Array(9).fill('--'));
  const [jogadorX, setJogadorX] = useState(true);

  function fazJogada(index) {
    if (tabuleiro[index] !== '--') return;

    let letra = jogadorX ? 'X' : 'O';
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = letra;

    setTabuleiro(novoTabuleiro);
    setJogadorX(!jogadorX);
  }

  function jogadaMaquina() {
    if (jogadorX) return;

    const casasVazias = tabuleiro
      .map((valor, index) => (valor === '--' ? index : null))
      .filter((v) => v !== null);

    if (casasVazias.length > 0) {
      const escolha = casasVazias[Math.floor(Math.random() * casasVazias.length)];
      fazJogada(escolha);
    }
  }

  useEffect(() => {
    if (!jogadorX) {
      jogadaMaquina();
    }
  }, [jogadorX]);

  return (
    <View style={styles.container}>
      {tabuleiro.map((valor, index) => (
        <Celula key={index} value={valor} onPress={() => fazJogada(index)} />
      ))}
    </View>
  );
}

