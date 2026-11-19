import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Chanson() {
  const nom = "L'autre hémisphère";
  return (
    <SafeAreaView>
      <Text>{nom}</Text>
    </SafeAreaView>
  );
}