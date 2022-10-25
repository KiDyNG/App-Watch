import React, { Component , useContext, useState} from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/AuthContext';
const RegiterScreen =({navigation})=>{
    const [fullName, setFullName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const {register} = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput style={styles.input} 
                    placeholder='Tên đầy đủ'
                    onChangeText={text=> setFullName(text)}
                />
                <TextInput style={styles.input} 
                    placeholder='Tên đăng nhập'
                    onChangeText={text=> setUserName(text)}
                />
                <TextInput style={styles.input} 
                    placeholder='Mật khẩu' 
                    secureTextEntry
                    onChangeText={text=> setPassword(text)}
                />
                {/* <Button title='Đăng nhập' 
                    onPress={
                        ()=>{
                            register(fullName, userName, password);
                        }
                    }
                    
                /> */}
                <TouchableOpacity
                       onPress={
                        ()=>{
                            register(fullName, userName, password);
                        }
                        
                    }style={{height:40,borderRadius:10,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}
                    >
                        <Text style={{fontSize:'bold'}}>Đăng ký</Text>
                    </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Text>Bạn đã có Tài khoản?</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Login')}
                    >
                        <Text style={{color: 'red'}}>Đăng Nhập</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper:{
        width: '80%'
    },
    input:{
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
        height: 50,
    }
})
export default RegiterScreen;