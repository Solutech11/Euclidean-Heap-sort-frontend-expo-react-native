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
import LoadingComp from '../../Component/Loading.Comp'

const HeapSortInput = ({navigation}) => {
    //loading
    const [Loading, setLoading] = useState(false)
    //input
    const [Input1, setInput1] = useState()

    //runapi 
    async function runApi() {
        navigation.navigate('HeapSortSolution')
    }
  return (
    <Pressable onPress={()=>Keyboard.dismiss()} style={{flex:1}}>
    <SafeAreaView style={[GeneralStyle.Container,{alignItems:'center', paddingTop:0}]}>

        <LoadingComp visible={Loading} />
        {/* Nav */}
        <NavComp navigation={navigation} doc={'HeapSortDoc'} />

        <Br height={100} />
        {/* toptexts */}
        <View style={styles.toptextContainer}>
          <Text style={TextStyleStyle._38Sen800}>Heap Sort</Text>
          <Text style={[TextStyleStyle._16Signika400,{color:Colors.subText}]}>Input array</Text>
        </View>

        <Br height={70} />
        {/* inputs */}
        <View style={styles.inputContainer}>

            <InputsComp longInput={true} changeText={setInput1} title={"Array"} />


        </View>

        <Br height={50} />

        {/* submit btn  */}
        <Btn_Comp text={"Sort"} action={runApi} />
    </SafeAreaView>
    </Pressable>
  )
}

export default HeapSortInput

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