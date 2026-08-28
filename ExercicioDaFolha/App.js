import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.containerPrincipal}>
        <View style={styles.cabecalho}>
          <View style={styles.quadradoIcone} />
          <View style={styles.caixaTextoCabecalho}>
            <Text style={styles.textoTitulo}>nome genérico</Text>
            <View style={styles.linhaVermelha} />
          </View>
        </View>

        <View style={styles.secaoCards}>
          <View style={styles.cardPequeno}>
            <View style={styles.miniQuadrado} />
            <Text style={styles.textoCard}>foto/sla</Text>
          </View>

          <View style={styles.cardPequeno}>
            <View style={styles.miniQuadrado} />
            <Text style={styles.textoCard}>foto/sla</Text>
          </View>

          <View style={styles.cardPequeno}>
            <View style={styles.miniQuadrado} />
            <Text style={styles.textoCard}>foto/sla</Text>
          </View>
        </View>

        <View style={styles.caixaGrande} />

        <View style={styles.itemLista}>
          <View style={styles.quadradoIcone} />
          <View style={styles.caixaTextoLista}>
            <Text style={styles.textoTituloItem}>titulo</Text>
            <Text style={styles.textoSubtitulo}>descreva algo</Text>
          </View>
        </View>

        <View style={styles.itemLista}>
          <View style={styles.quadradoIcone} />
          <View style={styles.caixaTextoLista}>
            <Text style={styles.textoTituloItem}>titulo 2</Text>
            <Text style={styles.textoSubtitulo}>descreva algo</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  containerPrincipal: {
    flex: 1,
    gap: 15,
    borderColor: "#00B0FF",
    borderWidth: 2,
    padding: 10,
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderColor: "#00B0FF",
    borderWidth: 2,
    padding: 10,
  },
  quadradoIcone: {
    width: 50,
    height: 50,
    borderColor: "#00B0FF",
    borderWidth: 2,
  },
  caixaTextoCabecalho: {
    justifyContent: "center",
  },
  textoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  linhaVermelha: {
    height: 3,
    backgroundColor: "red",
    width: 120,
    marginTop: 4,
  },
  secaoCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#00B0FF",
    borderWidth: 2,
    padding: 10,
  },
  cardPequeno: {
    borderColor: "#00B0FF",
    borderWidth: 2,
    padding: 8,
    alignItems: "center",
    gap: 5,
  },
  miniQuadrado: {
    width: 35,
    height: 25,
    borderColor: "#00B0FF",
    borderWidth: 2,
  },
  textoCard: {
    fontSize: 12,
    color: "#000000",
  },
  caixaGrande: {
    height: 140,
    borderColor: "#00B0FF",
    borderWidth: 2,
    width: "100%",
  },
  itemLista: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderColor: "#00B0FF",
    borderWidth: 2,
    padding: 10,
  },
  caixaTextoLista: {
    justifyContent: "center",
  },
  textoTituloItem: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  textoSubtitulo: {
    fontSize: 12,
    color: "#555555",
  },
});