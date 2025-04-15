import { useEffect, useState } from "react";
import { View, Alert, Button, TouchableOpacity, Text } from "react-native";
import Celula from "../Celula/Celula";
import styles from "./Styles";

export default function Tabuleiro() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill("--"));
  const [jogadorX, setJogadorX] = useState(true);
  const [vencedor, setVencedor] = useState(null);

  function fazJogada(index) {
    if (tabuleiro[index] !== "--" || vencedor) return;

    let letra = jogadorX ? "X" : "O";
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = letra;

    setTabuleiro(novoTabuleiro);
    setJogadorX(!jogadorX);
  }

  function jogadaMaquina() {
    if (jogadorX || vencedor) return;

    const casasVazias = tabuleiro
      .map((valor, index) => (valor === "--" ? index : null))
      .filter((v) => v !== null);

    if (casasVazias.length > 0) {
      const escolha =
        casasVazias[Math.floor(Math.random() * casasVazias.length)];
      fazJogada(escolha);
    }
  }

  function verificaVencedor(tabuleiro) {
    const combinacoes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of combinacoes) {
      if (
        tabuleiro[a] !== "--" &&
        tabuleiro[a] === tabuleiro[b] &&
        tabuleiro[a] === tabuleiro[c]
      ) {
        return tabuleiro[a];
      }
    }

    return null;
  }

  useEffect(() => {
    const resultado = verificaVencedor(tabuleiro);
    if (resultado) {
      setVencedor(resultado);
      Alert.alert("Fim de Jogo", `Jogador ${resultado} venceu!`);
    }
  }, [tabuleiro]);

  useEffect(() => {
    if (!jogadorX) {
      jogadaMaquina();
    }
  }, [jogadorX]);

  function reiniciarJogo() {
    setTabuleiro(Array(9).fill("--"));
    setJogadorX(true);
    setVencedor(null);
  }

  return (
    <View style={styles.container}>
      {tabuleiro.map((valor, index) => (
        <Celula key={index} value={valor} onPress={() => fazJogada(index)} />
      ))}
      <TouchableOpacity style={styles.botao} onPress={reiniciarJogo}>
        <Text style={styles.botaoTexto}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}
