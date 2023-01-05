import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthNavigationStack from './AuthNavigationStack';
export default function App() {
  const [loaded] = useFonts({
    // "AnekDevanagari-Bold": require("./assets/fonts/AnekDevanagari-Bold.ttf"),
    // "AnekDevanagari-Light": require("./assets/fonts/AnekDevanagari-Light.ttf"),
    // "AnekDevanagari-Medium": require("./assets/fonts/AnekDevanagari-Medium.ttf"),
    // "AnekDevanagari-Regular": require("./assets/fonts/AnekDevanagari-Regular.ttf"),
    
    "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
  });

  if (!loaded) return null;
  const queryClient=new QueryClient();
  return (<QueryClientProvider client={queryClient}>
    <AuthNavigationStack />
  </QueryClientProvider>
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
