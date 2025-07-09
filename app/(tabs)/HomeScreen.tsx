import { View, Text, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const HomeScreen = () => {
  const [show,setShow]=useState()
  return (
      <View style={styles.container}>
      <View>
        <Text style={styles.title} >MedRemind</Text>
      </View>
      <View>
        <Text style={{fontSize:20}}> Today's Medicine</Text>
      </View>
      </View>
    

  )
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    
  },
  title: {
    fontSize: 40,
    fontWeight:800
  }
})