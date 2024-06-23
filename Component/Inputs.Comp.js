import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import TextStyleStyle from '../Styles/TextStyle.style'
import Colors from '../Styles/Colors'
import ScaleSize from './scaleSize.Comp'

const InputsComp = ({changeText, title, longInput=false, value}) => {
  return (
    <View style={{width:longInput?'100%':'40%'}}>
      <Text style={[TextStyleStyle._15Signika400,{color:Colors.subText}, longInput?{textAlign:'center'}:null]}>{title}</Text>
      <TextInput onChangeText={changeText} value={value} keyboardType={Platform.OS=='ios'?'numbers-and-punctuation':'number-pad'} style={[TextStyleStyle._16Signika400,styles.Inputstyle, longInput?{width:'100%'}:null]} />
    </View>
  )
}

export default InputsComp

const styles = StyleSheet.create({
    Inputstyle:{
        backgroundColor:Colors.white,
        height:ScaleSize(74),
        width: '100%',
        borderWidth:1,
        borderColor:Colors.secondary,
        borderRadius:ScaleSize(21),
        textAlign:'center',
        fontSize:ScaleSize(40)
    }
})