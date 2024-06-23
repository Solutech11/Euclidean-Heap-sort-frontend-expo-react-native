import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import TextStyleStyle from '../Styles/TextStyle.style'
import Colors from '../Styles/Colors'
import ScaleSize from './scaleSize.Comp'

const InputsComp = ({changeText, title}) => {
  return (
    <View style={{width:'40%'}}>
      <Text style={[TextStyleStyle._15Signika400,{color:Colors.subText}]}>{title}</Text>
      <TextInput onChangeText={changeText} keyboardType='decimal-pad' style={[TextStyleStyle._16Signika400,styles.Inputstyle]} />
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