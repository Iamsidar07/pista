import { useFonts } from 'expo-font';
import SignedInStack from './navigation';
export default function App() {
  const [loaded] = useFonts({
    "AnekDevanagari-Bold": require("./assets/fonts/AnekDevanagari-Bold.ttf"),
    "AnekDevanagari-Light": require("./assets/fonts/AnekDevanagari-Light.ttf"),
    "AnekDevanagari-Medium": require("./assets/fonts/AnekDevanagari-Medium.ttf"),
    "AnekDevanagari-Regular": require("./assets/fonts/AnekDevanagari-Regular.ttf"),
  });

  if (!loaded) return null;
  return (<SignedInStack />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
