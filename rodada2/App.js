import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (


    <View style={styles.caixaIcone}>
      <Text fontSize={10}>teste</Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  caixaIcone: {
    paddingTop: 50,
    height: 60,
    width: 60,
    backgroundColor: "rgb(53, 0, 247)",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"

  },

  caixaTexto: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  }
});
