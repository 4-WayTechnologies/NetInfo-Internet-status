import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NoConnection = (props) => {
  const Check=()=>{
    alert("Connected the page")

 
  }
  return (
    <View style={{flex:1,backgroundColor:'#26262D'}}>

    <View style={styles.NoConnection_img}>
    <Image source={require('./asset/connection.png')}/>
    </View>

      <TouchableOpacity style={styles.Retry} onPress={()=>Check()}>
      <Text style={{fontSize:20,color:'#ffffff'}}>Retry</Text>
      </TouchableOpacity>

    </View>
  )
}

export default NoConnection

const styles = StyleSheet.create({
    Retry:{width:100,
        height:33,
        backgroundColor:'#0061C1',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        marginTop:10,
        alignSelf:'center' 
    },NoConnection_img:{width:218,
        height:160,
        marginHorizontal:95,
        marginTop:26
    }
})
