import { NavigationContainer } from "@react-navigation/native";
import BottomNavbar from "./lib/components/molecules/bottom-navbar/BottomNavbar";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>        
        <BottomNavbar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}