import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const image = {uri: 'https://pbs.twimg.com/media/E-zeIk7XEAMX-IO.jpg'};


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Quem leu da o boga</Text>
      <StatusBar style="auto" />
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Muçei Klein</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
