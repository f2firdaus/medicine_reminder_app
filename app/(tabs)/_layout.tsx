import { Tabs } from "expo-router";
import { Entypo, Feather,AntDesign } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function RootLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        
      }
      
    }} >
      <Tabs.Screen name="HomeScreen" options={{
        title: "Home", 
        tabBarIcon: ({ color, size }) => (
           <Entypo name="home" color={color} size={28} />
        )
      }} />
      
      <Tabs.Screen name="Reminder" options={{
        title: "Reminder",
        tabBarIcon: ({ color, size }) => (
       <MaterialIcons name="add-alert" size={24} color={color} />
        )
             
      }} />
       <Tabs.Screen name="AddNew" options={{
        title: "Add New",
        tabBarIcon: ({ color, size }) => (
      <AntDesign name="stepforward" size={24} color={color} />
        )
             
      }} />
      <Tabs.Screen name="Setting" options={{
        title: "Setting",
         tabBarIcon: ({ color, size }) => (
           <Feather name="settings" color={color} size={28} />
        )
        }}/>
    </Tabs>
  );
}
