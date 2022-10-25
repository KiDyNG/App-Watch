import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HorizotallList from './HorizotallList'
const BreakingNews =({data}) =>{
  
    return (
      <HorizotallList title='Sản phẩm mới' data={data}/>
    )
  
}

const styles = StyleSheet.create({})
export default BreakingNews;
