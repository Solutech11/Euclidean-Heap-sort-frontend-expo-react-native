import { Keyboard, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextStyleStyle from '../../Styles/TextStyle.style'
import GeneralStyle from '../../Styles/General.style'
import Colors from '../../Styles/Colors'
import NavComp from '../../Component/Nav.Comp'
import Br from '../../Component/Br.Comp'
import InputsComp from '../../Component/Inputs.Comp'
import Btn_Comp from '../../Component/Btn.Comp'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import ScaleSize from '../../Component/scaleSize.Comp'
import Documentaion from '../../Component/Documentaion'

const DocEuclidean = ({navigation}) => {

    //input
    const [Input1, setInput1] = useState()
    const [Input2, setInput2] = useState()

    //runapi 
    async function runApi() {
        Dialog.show({
            type:ALERT_TYPE.SUCCESS,
            title:"Success",
            textBody:"SOlution is 500",
            button:"Done",
            
        })
    }
  return (
    <Pressable onPress={()=>Keyboard.dismiss()} style={{flex:1}}>
    <SafeAreaView style={[GeneralStyle.Container,{alignItems:'center', paddingTop:0}]}>

        {/* Nav */}
        <NavComp navigation={navigation} />

        <Br height={20} />
        {/* toptexts */}
        <View style={styles.toptextContainer}>
          <Text style={[TextStyleStyle._38Sen800,{textAlign:'center'}]}>Euclidean Algorithm Documentation</Text>
        </View>

        <Br height={20} />

        {/* body */}
        <View style={styles.BodyContainer}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
                <Pressable>
                <Text style={TextStyleStyle._20Signika400}>{Documentaion.Euclidean}</Text>
                </Pressable>
                
            </ScrollView>
        </View>
    </SafeAreaView>
    </Pressable>
  )
}

export default DocEuclidean

const styles = StyleSheet.create({
    toptextContainer:{
        alignItems:'center', 
        gap:5,
        width:377
    },
    BodyContainer:{
        width: ScaleSize(379),
        flex:1,
        backgroundColor:Colors.white,
        borderWidth:1,
        borderColor:Colors.secondary,
        borderRadius:21,
        padding:15,
    }
})