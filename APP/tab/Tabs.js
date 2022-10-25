import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Follow from '../screens/Follow';
import Setting from '../screens/Setting';
import Video from '../screens/Video';
import Cart from '../screens/Cart';
import User from '../screens/User';
// import User from '../../../APP/screens/User';
import { NavigationContainer } from '@react-navigation/native';
import { Text, StyleSheet, View , Image} from 'react-native'

const Tab = createBottomTabNavigator();

// const Tab = createBottomTabNavigator();

const Tabs=() => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 80,
                    ...styles.shadow,
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5,width:50,}}>
                            <Image source={require('../img/iconhome.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'red': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? 'red': 'gray',
                                    fontSize: 12
                                }}
                            >Home</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Cart" component={Cart} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5, width:50,}}>
                            <Image source={require('../img/ImageOrder.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ?'red': 'gray'
                                }}
                            />
                           
                            <Text
                                style={{
                                    color: focused ? 'red': 'gray',
                                    fontSize: 12
                                }}
                            >Giỏ hàng</Text>
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen name="User" component={User} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center',width:50, top: 5}}>
                            <Image source={require('../img/ImageUser.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'red': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? 'red': 'gray',
                                    fontSize: 12
                                }}>
                                    Tài khoản</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Setting" component={Setting} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center',width:50, top: 5}}>
                            <Image source={require('../img/Settingicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'red': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? 'red': 'gray',
                                    fontSize: 12
                                }}>Cài Đặt
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7f5df0',

        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export default Tabs;