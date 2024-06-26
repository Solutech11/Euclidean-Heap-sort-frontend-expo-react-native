import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Pages/Splash';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './Styles/Colors';
import { Sen_800ExtraBold, useFonts } from '@expo-google-fonts/sen';
import { SignikaNegative_400Regular, SignikaNegative_500Medium, SignikaNegative_600SemiBold, SignikaNegative_700Bold } from '@expo-google-fonts/signika-negative';
import SelectionScreen from './Pages/SelectionScreen';
import EuclideanInput from './Pages/Euclidean/EuclideanInput';
import DocEuclidean from './Pages/Euclidean/Doc';
import HeapSortInput from './Pages/HeapSort/HeapSortInput';
import DocHeapSort from './Pages/HeapSort/Doc';
import HeapSortSolution from './Pages/HeapSort/Solution';

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Sen_800ExtraBold, 
    SignikaNegative_400Regular,
    SignikaNegative_500Medium,
    SignikaNegative_600SemiBold,
    SignikaNegative_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AlertNotificationRoot colors={[{success:Colors.primary, card:Colors.background}]} theme='light'>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>

            {/* splash  */}
            <Stack.Screen name="Splash" component={Splash} />
          
            {/* Selecion page */}
            <Stack.Screen name='SelectionScreen' component={SelectionScreen} />
         
            {/* EUCLIDEAN INPUT */}
            <Stack.Screen name='EuclideanInput' component={EuclideanInput} />

            {/* EUCLIDEAN DOCUMENTATION */}
            <Stack.Screen name='EuclideanDoc' component={DocEuclidean} />


            {/* HEAP SORT INPUT */}
            <Stack.Screen name='HeapSortInput' component={HeapSortInput} />

            {/* HEAP SORT DOCUMENTAION */}
            <Stack.Screen name='HeapSortDoc' component={DocHeapSort} />

            {/* HEAP SORT SOLUTION */}
            <Stack.Screen name='HeapSortSolution' component={HeapSortSolution} options={{
              animation:'slide_from_bottom'
            }} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AlertNotificationRoot>
  );
}

