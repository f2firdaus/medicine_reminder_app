import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const navigation= useNavigation()
  return (
    <View style={styles.container}>
      <Text onPress={()=>navigation.navigate('(tabs)/details')}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
