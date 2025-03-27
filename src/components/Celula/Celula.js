import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';


export default function Celula({valor, onPress}) {
  <View style={styles.container}>
    <TouchableOpacity style={styles.container} onPress={onPress}>        
      <Text style={styles.text}>{valor}</Text>
    </TouchableOpacity>
  </View>
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{valor}</Text>
        </TouchableOpacity>     
    </View>
  );
}


