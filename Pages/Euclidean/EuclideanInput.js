import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native'
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

const EuclideanInput = ({navigation}) => {

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

        <Br height={100} />
        {/* toptexts */}
        <View style={styles.toptextContainer}>
          <Text style={TextStyleStyle._38Sen800}>Euclidean Algorithm</Text>
          <Text style={[TextStyleStyle._16Signika400,{color:Colors.subText}]}>Fill in the input</Text>
        </View>

        <Br height={70} />
        {/* inputs */}
        <View style={styles.inputContainer}>

            <InputsComp changeText={setInput1} title={"Input A"} />

            <InputsComp changeText={setInput2} title={"Input B"} />

        </View>

        <Br height={50} />

        {/* submit btn  */}
        <Btn_Comp text={"Submit"} action={runApi} />
    </SafeAreaView>
    </Pressable>
  )
}

export default EuclideanInput

const styles = StyleSheet.create({
    toptextContainer:{
        alignItems:'center', 
        gap:5,
        width:377
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width: "100%",
    }
})