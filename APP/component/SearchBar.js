// import React, { Component } from 'react'
// import { Text, TextInput, View, StyleSheet } from 'react-native'

// const SearchBar =()=>{
//     return(
//         <View style={styles.container}>
//             <TextInput style={styles.searchInput} placeholder='Nhập Thông Tin...'/>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container:{
//         width: '100%',
//         height: 50,
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         justifyContent: 'center'
//     },
//     searchInput:{
//         width: '100%',
//         height: '100%',
//         paddingLeft: 8,
//         fontSize: 16,
//         borderWidth: 2,
//         borderRadius: 10,
//     }
// })
// export default SearchBar;
import React, { Component } from 'react'
import { Text,Image,TouchableOpacity, TextInput, View, StyleSheet } from 'react-native'

const SearchBar =()=>{
    return(
      
      <View style={styles.container}>
        <View style={styles.TextInput}>
            <TextInput
                style={styles.input}
                placeholder='Tìm kiếm'  
            />
            <View style={{position:'absolute',left:'82%'}}>
              <TouchableOpacity >
                <Image
                  source={require('../img/ImageSearch.png')}
                  style={{width: 20, height: 20,marginHorizontal:10,marginVertical:18}}
                />
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        marginTop:50,
        justifyContent: 'center',
    },
    input: {
        height: 35,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        // color: '#afdade',
        borderRadius: 100,
        width: '100%',
        
      },
      TextInput:{
        width:'100%',
        flexDirection:'row',
        position:'relative',
        backgroundColor:'2f64ad',
        // backgroundColor:'#afdade',
        justifyContent:'center'
      },
    
})
export default SearchBar;


