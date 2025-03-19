import { View } from 'react-native';
import Celula from '../Celula/Celula';
import styles from './Styles';


import { useState } from 'react';

export default function Tabuleiro() {

  const [tabuleiroJogo , setTabuleiroJogo] = useState(Array(9).fill('--'))

  function fazerJogada(indice) {

   let tabuleiroAux = [...tabuleiroJogo];
   tabuleiroAux[indice] = 'X'
   setTabuleiroJogo(tabuleiroAux);
  }
  

  return (

    <View style={styles.container}>
        <Celula valor={tabuleiroJogo[0]} onPress={() => fazerJogada(0)} />
        <Celula valor={tabuleiroJogo[1]} onPress={() => fazerJogada(1)} />
        <Celula valor={tabuleiroJogo[2]} onPress={() => fazerJogada(2)} />
        <Celula valor={tabuleiroJogo[3]} onPress={() => fazerJogada(3)} />
        <Celula valor={tabuleiroJogo[4]} onPress={() => fazerJogada(4)} />
        <Celula valor={tabuleiroJogo[5]} onPress={() => fazerJogada(5)} />
        <Celula valor={tabuleiroJogo[6]} onPress={() => fazerJogada(6)} />
        <Celula valor={tabuleiroJogo[7]} onPress={() => fazerJogada(7)} />
        <Celula valor={tabuleiroJogo[8]} onPress={() => fazerJogada(8)} />

    </View>
  );
}

