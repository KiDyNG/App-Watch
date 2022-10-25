import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Screen from '../component/Screnn'
import SearchBar from '../component/SearchBar';
import BreakingNews from '../component/BreakingNews'
import TechNews from '../component/TechNews'
import FeaturedNews from '../component/FeaturedNews'
import data from '../../dataAPI'
import FlatCard from '../component/FlatCard';
import VelticalList from '../component/VelticalList';
import Swipslider from '../component/Swipslider';
const HomeScreen =()=>{
    const spmoi = data.filter(item=>item.category === "new")
    const spnoibat = data.filter(item=>item.category === "noibat")
    const sanpham = data.filter(item=>item.category === "sanpham")
    return(
        
        <Screen>
           
            <SearchBar/>
            <Swipslider/>
            <BreakingNews data={spmoi}/>
            <TechNews data={spnoibat}/>
            <VelticalList  data={sanpham}/>
            
        </Screen>
    )
}

const styles = StyleSheet.create({})
export default HomeScreen;