import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Styles/Colors'
import ScaleSize from './scaleSize.Comp'
import TextStyleStyle from '../Styles/TextStyle.style'

const SelectCardsComp = ({img, text, Action}) => {
  return (
    <Pressable onPress={Action} style={styles.Container}>
        <Image source={img} style={styles.images} />

        <Text style={[TextStyleStyle._32Signika600,{color:Colors.white}]}>{text}</Text>
    </Pressable>
  )
}

export default SelectCardsComp

const styles = StyleSheet.create({
    images:{
        height:195,
        width:195
    },
    Container:{
        width:'100%',
        height: ScaleSize(300),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.primary,
        borderRadius:21
    }
})