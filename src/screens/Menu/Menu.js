import { View, TouchableOpacity, Text } from "react-native";

import Styles from "./Styles";

export default function Menu({ navigation }) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate("Humano x Humano")}
      >
        <Text style={Styles.buttonText}>Jogar: Humano x Humano</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate("Humano x Máquina")}
      >
        <Text style={Styles.buttonText}>Jogar: Humano x Máquina</Text>
      </TouchableOpacity>
    </View>
  );
}
