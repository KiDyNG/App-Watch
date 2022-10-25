
import React, { Component, useState } from 'react'
import { Text, StyleSheet,TextInput,TouchableOpacity, View, Dimensions, ScrollView, Image } from 'react-native'


const images = [
    'https://www.xwatch.vn/wp-content/uploads/2016/12/dia-chi-ban-dong-ho-chinh-hang-tai-ha-noi-3.jpg',
    'https://xwatch.vn/images/products/2022/02/14/large/orient-re-av0b03b00b_1644814133.jpg',
    'https://xwatch.vn/images/products/2022/08/10/large/dong-ho-ogival-og35865agr-gl_1660100459.jpg'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Swipslider =()=> {
    const [imgActive, setimgActive] = useState(0);
    onchange = (nativeEvent) =>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOfffset.x / nativeEvent.layoutMeasurement.width);
            if(slide!=imgActive){
                setimgActive(slide);
            }
        }
        
    }
  
  return (
        
    <View style={styles.container}>
             <View style={styles.wrap}>
                <ScrollView 
                // onScroll={({nativeEvent}) =>onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}>
                    {
                        images.map((e, index) =>
                        <Image
                        key={e}
                        resizeMode='stretch'
                        style={styles.wrap}
                        source={{uri:e}}
                        />)
                    }

                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                        <Text
                            key={e}
                            style={imgActive ==index ? styles.dotActive : styles.dot}
                        >◉</Text>
                        )
                    }
                    
                </View>
             </View>
    </View>
    

)

  
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
//   backgroundColor: '#e3dee3',
},
wrap:{
    width:WIDTH,
    height: HEIGHT * 0.3
},
wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
},
dotActive:{
    margin:3,
    color:'black'
},
dot:{
    margin:3,
    color:'white'
}


})
export default Swipslider;
