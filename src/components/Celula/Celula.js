import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import styles from './Styles';

export default function Celula({valor, onPress}) {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{valor}</Text>
        </TouchableOpacity>     
    </View>
  );
}


