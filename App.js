// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import SearchBar from './APP/component/SearchBar';
// import Screnn from './APP/component/Screnn';
// import BlockCard from './APP/component/BlockCard';
// import FeaturedNews from './APP/component/FeaturedNews';
// import SmallCard from './APP/component/SmallCard';
// import BreakingNews from './APP/component/BreakingNews';
// import data from './dataAPI';
// import TechNews from './APP/component/TechNews';
import Navigater from './APP/tab/Navigater';
import {AuthProvider} from './APP/context/AuthContext';
import Tabs from './APP/tab/Tabs';
import Appnav from './APP/tab/Appnav';
import NavigationContainer from './APP/tab/Navigater';
export default function App() {

  return (
    <AuthProvider>
      <Appnav/>
      
     </AuthProvider> 
    
    
    
  );
}


