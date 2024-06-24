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
import TypingAnimation from '../../Component/TypeAnimation.Comp'
import { StatusBar } from 'expo-status-bar'

const HeapSortSolution = ({navigation, route}) => {

    let {solution}= route.params;

  return (
    <Pressable onPress={()=>Keyboard.dismiss()} style={{flex:1}}>
        <StatusBar style='dark' />

    <SafeAreaView style={[GeneralStyle.Container,{alignItems:'center', paddingTop:0}]}>

        {/* Nav */}
        <NavComp navigation={navigation} doc={'HeapSortDoc'} />

        <Br height={20} />
        {/* toptexts */}
        <View style={styles.toptextContainer}>
          <Text style={[TextStyleStyle._38Sen800,{textAlign:'center'}]}>Heap Sort</Text>
        </View>

        <Br height={60} />

        {/* body */}
        <Text style={[TextStyleStyle._16Signika400,{color:Colors.subText, marginBottom:ScaleSize(10)}]}>Solution</Text>
        <View style={styles.BodyContainer}>

            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
                <Pressable>
                    <TypingAnimation styless={TextStyleStyle._20Signika400} speed={10} text={`${solution}`} />
                </Pressable>
                
            </ScrollView>
        </View>

        <Br height={30} />

        <Btn_Comp text={"Done"} action={()=>navigation.pop()} />

    </SafeAreaView>
    </Pressable>
  )
}

export default HeapSortSolution

const styles = StyleSheet.create({
    toptextContainer:{
        alignItems:'center', 
        gap:5,
        width:377
    },
    BodyContainer:{
        width: ScaleSize(345),
        height:ScaleSize(499),
        backgroundColor:Colors.white,
        borderWidth:1,
        borderColor:Colors.secondary,
        borderRadius:21,
        padding:15,
    }
})