import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import NoConnection from './NoConnection';
const App = () => {
  const info=useNetInfo()

  return (
    <View>
    {info.isConnected==true? 
      <Image source={{uri:'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'}} style={styles.img}/>:
    <NoConnection/>
    }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  img:{
    width:'100%',
    height:'100%'
  }
})