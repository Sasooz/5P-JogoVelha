import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "./src/screens/Menu/Menu";
import TabuleiroHumano from "./src/screens/TabuleiroHumano/TabuleiroHumano";
import TabuleiroMaquina from "./src/screens/TabuleiroMaquina/TabuleiroMaquina";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Humano x Humano" component={TabuleiroHumano} />
        <Stack.Screen name="Humano x Máquina" component={TabuleiroMaquina} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
