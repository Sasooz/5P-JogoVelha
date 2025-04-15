import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";

export default function Celula({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}
