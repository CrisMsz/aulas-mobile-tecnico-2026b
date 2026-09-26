import { Stack, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

// Abre a conexão com o banco de dados
const db = SQLite.openDatabaseSync("tarefas.db");

export default function ListaDb() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  // Inicializa a tabela e carrega os registros salvos
  const carregarDados = useCallback(() => {
    try {
      db.execSync(`
        CREATE TABLE IF NOT EXISTS tarefas (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          texto TEXT NOT NULL
        );
      `);
      const dados = db.getAllSync("SELECT * FROM tarefas ORDER BY id DESC");
      setLista(dados);
    } catch (erro) {
      console.error("Erro ao carregar do SQLite:", erro);
    }
  }, []);

  // useFocusEffect recarrega a lista sempre que o usuário entra na tela
  useFocusEffect(
    useCallback(() => {
      carregarDados();
    }, [carregarDados])
  );

  function salvar() {
    if (!texto.trim()) return;

    try {
      db.runSync("INSERT INTO tarefas (texto) VALUES (?)", [texto.trim()]);
      setTexto("");
      carregarDados();
    } catch (erro) {
      console.error("Erro ao salvar no SQLite:", erro);
    }
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Tarefas no banco" }} />

      <TextInput
        style={styles.campo}
        value={texto}
        onChangeText={setTexto}
        placeholder="Nova tarefa no banco"
      />
      <Button title="Adicionar" onPress={salvar} />

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.texto}</Text>
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