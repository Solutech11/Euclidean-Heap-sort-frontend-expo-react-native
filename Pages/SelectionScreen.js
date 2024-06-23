import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GeneralStyle from '../Styles/General.style'
import TextStyleStyle from '../Styles/TextStyle.style'
import Colors from '../Styles/Colors'
import SelectCardsComp from '../Component/SelectCards.Comp'

const SelectionScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[GeneralStyle.Container,{alignItems:'center',justifyContent:'space-evenly'}]}>
        
        {/* toptexts */}
        <View style={{alignItems:'center', gap:5}}>
          <Text style={TextStyleStyle._38Sen800}>Select Section</Text>
          <Text style={[TextStyleStyle._16Signika400,{color:Colors.subText}]}>Select what you wanna do today</Text>
        </View>

        <SelectCardsComp Action={()=>navigation.navigate('EuclideanInput')} img={require('../assets/E.png')} text={'Euclidean Algorithm'} />

        <SelectCardsComp Action={()=>navigation.navigate('HeapSortInput')} img={require('../assets/heapsort.png')} text={'Heap Sort'} />


    </SafeAreaView>
  )
}

export default SelectionScreen




const styles = StyleSheet.create({})