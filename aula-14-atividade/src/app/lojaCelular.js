import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import * as SQLite from "expo-sqlite";

export default function LojaCelular() {
  const [produtos, setProdutos] = useState([]);
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [valor, setValor] = useState(0);
  const [memoria_armazenamento, setMemoria_armazenamento] = useState("");
  const [memoria_ram, setMemoria_ram] = useState("");

  async function buscarProdutos() {
    const resposta = await fetch(
      "https://6ae535d428393034b08e3168.mockapi.io/Produtos",
    );
    const dados = await resposta.json();
    setProdutos(dados);
  }

  async function salvarProduto() {
    await fetch("https://6ae535d428393034b08e3168.mockapi.io/Produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        modelo: modelo,
        marca: marca,
        valor: valor,
        memoriaArmazenamento: memoria_armazenamento,
        memoriRAM: memoria_ram,
      }),
    });
    setModelo("");
    setMarca("");
    setValor("");
    setMemoria_armazenamento("");
    setMemoria_ram("");

    buscarProdutos();
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Meus produtos" }} />

      <TextInput
        style={styles.campo}
        value={marca}
        onChangeText={setModelo}
        placeholder="Modelo do produto"
      />

      <TextInput
        style={styles.campo}
        value={marca}
        onChangeText={setMarca}
        placeholder="Marca do produto"
      />
      <TextInput
        style={styles.campo}
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        placeholder="Valor do produto"
      />
      <TextInput
        style={styles.campo}
        value={memoria_armazenamento}
        onChangeText={setMemoria_armazenamento}
        placeholder="Memória de armazenamento do produto"
      />
      <TextInput
        style={styles.campo}
        value={memoria_ram}
        onChangeText={setMemoria_ram}
        placeholder="Memoria RAM do produto"
      />

      <Button title="Salvar produto" onPress={salvarProduto} />

      <FlatList
        style={styles.lista}
        data={produtos}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.id} - {item.modelo} - {item.marca} - {item.memoria_armazenamento} - {item.memoria_ram}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },

  lista: {
    flex: 1,
    marginTop: 16,
  },

  item: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    fontSize: 15,
    color: "#111827",
  },
});
