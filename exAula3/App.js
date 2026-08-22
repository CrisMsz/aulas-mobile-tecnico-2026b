import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Texto template</Text>
      <StatusBar style="auto" />
      <View style={styles.viewPrincipal}>
        <View style={styles.cabecalho}>
          <View style={styles.circulo}>
            {/* O estilo textoBranco foi movido diretamente para a tag Text */}
            <Text style={styles.textoBranco}>Testando atividade</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    paddingTop: 40,
  }, // Vírgula adicionada aqui

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bola: {
    alignItems: "center", // Corrigido de "space-around" para "center"
    justifyContent: "space-around",
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "#233",
  },

  textoBranco: {
    fontSize: 20,
    color: "rgb(255, 255, 255)",
  },

  circulo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "rgb(157, 161, 161)",
  },

  cabecalho: {
    gap: 20,
    flexDirection: "row",
    marginLeft: 10,
  },
});