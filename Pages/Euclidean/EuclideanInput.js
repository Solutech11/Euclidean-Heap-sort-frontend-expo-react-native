import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextStyleStyle from '../../Styles/TextStyle.style'
import GeneralStyle from '../../Styles/General.style'
import Colors from '../../Styles/Colors'
import NavComp from '../../Component/Nav.Comp'
import Br from '../../Component/Br.Comp'

const EuclideanInput = ({navigation}) => {
  return (
    <SafeAreaView style={[GeneralStyle.Container,{alignItems:'center', paddingTop:0}]}>

        {/* Nav */}
        <NavComp navigation={navigation} />

        <Br height={100} />
        {/* toptexts */}
        <View style={{alignItems:'center', gap:5,width:377}}>
          <Text style={TextStyleStyle._38Sen800}>Euclidean Algorithm</Text>
          <Text style={[TextStyleStyle._16Signika400,{color:Colors.subText}]}>Fill in the input</Text>
        </View>

        <View>
            
        </View>
    </SafeAreaView>
  )
}

export default EuclideanInput

const styles = StyleSheet.create({})