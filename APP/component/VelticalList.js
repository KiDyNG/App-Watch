import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import SmallCard from './SmallCard'
import FlatCard from './FlatCard'
import Title from './Title'
const VelticalList=({title, data}) =>{
    return (
      <>
        <Title size={20}>{title}</Title>
        <View style={styles.container}>
          {/* <View>Danh sách sản phẩm</View> */}
          <TouchableOpacity >
            {data.map(item=><FlatCard  item={item} key={item.id} style={styles.list}/>)}
       </TouchableOpacity> 
       </View>
        
      </>
    )
  
}

const styles = StyleSheet.create({
    container:{
      flex:1,
        marginBottom: 100,
        
    },
    list:{
      width:'100%',
      height:80
  }
})
export default  VelticalList;