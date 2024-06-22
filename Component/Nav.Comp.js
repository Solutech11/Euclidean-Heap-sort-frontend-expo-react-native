import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import TextStyleStyle from '../Styles/TextStyle.style';

const NavComp = ({navigation}) => {
  return (
    <View style={styles.Container}>
      
      <TouchableOpacity onPress={()=>navigation.pop()} style={styles.left}>
        <AntDesign name="caretleft" size={19} color="black" />
        <Text style={TextStyleStyle._15Signika400}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Documentaion')}>
        <Text style={TextStyleStyle._15Signika400}>Learn more</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavComp

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%'
    },
    left:{
        flexDirection:'row',
        alignItems:'center',
    }
})