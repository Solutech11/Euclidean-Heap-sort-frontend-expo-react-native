import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScaleSize from './scaleSize.Comp'
import Colors from '../Styles/Colors'
import TextStyleStyle from '../Styles/TextStyle.style'

const Btn_Comp = ({action,text}) => {
  return (
    <TouchableOpacity onPress={action} style={styles.Container}>
        <Text style={[TextStyleStyle._20Signika500, {color:Colors.background}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Btn_Comp

const styles = StyleSheet.create({
    Container:{
        width:ScaleSize(183),
        height:ScaleSize(54),
        borderRadius:ScaleSize(20),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.primary,
    }
})