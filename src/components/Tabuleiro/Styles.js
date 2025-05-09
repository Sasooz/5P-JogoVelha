import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela toda
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
  },

  tabuleiro: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    marginBottom: 30,
  },

  botao: {
    backgroundColor: "#8e44ad",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
