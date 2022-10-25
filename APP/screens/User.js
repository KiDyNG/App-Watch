import React, { Component } from 'react'
import { Text, StyleSheet,TextInput,TouchableOpacity, View } from 'react-native'

const User =()=> {
  
  return (
        
    <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ justifyContent: 'center',}}>
                    <Text style={{ fontSize: 20, alignSelf: 'center', paddingBottom: 5}}>Đổi mật khẩu</Text>
                    {/* <Text style={{ fontSize: 16, alignSelf: 'center', color: 'grey', }}>Vui lòng nhập mật khẩu mới</Text> */}
                </View>

            </View>
            
            <View style={styles.mid}>
                <Text style={{ paddingLeft: 20,justifyContent: 'center', fontSize: 14, color: 'black' }}>Mật khẩu mới</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 10, alignItems: 'center' }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu mới"
                    />
                </View>

                <Text style={{ paddingLeft: 30, fontSize: 14, color: 'black' }}>Nhập lại mật khẩu</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 10, alignItems: 'center' }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu mới"
                    />
                  
                </View>

                <TouchableOpacity style={{ alignSelf: 'center', paddingTop: 20, backgroundColor: 'white' }}>
                    <Text style={styles.button}>Đổi mật khẩu</Text>
                </TouchableOpacity>

            </View>
        
    </View>
    

)

  
}

const styles = StyleSheet.create({container: {
  flex: 1,
  backgroundColor: '#fff',
},
top: {
  flex: 30,
  justifyContent: 'center'
},
mid: {
  flex: 70,
},
input: {
  flex: 1,
  borderWidth: 1,
  borderRadius: 20,
  paddingVertical: 16,
  fontSize: 30,
  width:80,
  height:50,
  paddingHorizontal: 20
},
button: {
  borderWidth: 1,
  borderRadius: 20,
  paddingVertical: 20,
  paddingHorizontal: 30,
  backgroundColor: 'red',
  borderColor: 'red',
  color: 'white',
  fontSize: 20
}
})
export default User;
