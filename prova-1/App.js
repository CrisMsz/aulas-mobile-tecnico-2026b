import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.cabecalho}>
        <View style={styles.circulo} />
        <View style={styles.textos}>
          <Text style={styles.titulo}>React Native</Text>
          <Text style={styles.subtitulo}>Avaliação dia 04/09</Text>
        </View>
      </View>

      <View style={styles.conteudoMeio}>
        <View style={styles.cartaoBranco}>
          <Text style={styles.textoCartao}>Batatas são macias.</Text>
        </View>

        <View style={styles.botao}>
          <Button title="Enviar" color="#1b4194" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#edf2f7',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  circulo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1b4194',
  },
  Textos: {
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitulo: {
    color: '#8294ad',
    marginTop: 2,
  },
  conteudoMeio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  cartaoBranco: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoCartao: {
    fontSize: 16,
    color: '#334155',
  },
  botao: {
    width: '50%',
  },
});
