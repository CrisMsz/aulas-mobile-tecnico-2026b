import { Stack } from "expo-router";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Lista() {
  const [texto, setTexto] = useState();
  const [lista, setLista] = useState([]);

  function adicionar() {
    if (!texto.trim()) return;
    setLista([...lista, texto]);
    setTexto("");
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "lista" }} />

      <View style={styles.conteudo}>
        <TextInput
          style={styles.campo}
          value={texto}
          onChangeText={setTexto}
        />

        <View style={styles.containerBotao}>
          <Button title="ADICIONAR" color="#2196F3" onPress={adicionar} />
        </View>

        <FlatList
          style={styles.lista}
          data={lista}
          keyExtractor={(_, index) => String(index)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.itemCartao}>
              <Text style={styles.itemTexto}>{item}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 24,
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 28,
    alignItems: "center",
  },
  campo: {
    width: "100%",
    height: 42,
    borderWidth: 1,
    borderColor: "#333333",
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#000000",
    marginBottom: 14,
  },
  containerBotao: {
    marginBottom: 16,
  },
  lista: {
    width: "100%",
  },
  itemCartao: {
    backgroundColor: "#3E3E3E",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  itemTexto: {
    color: "#FFFFFF",
    fontSize: 15,
  },
});
