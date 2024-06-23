import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import Colors from '../Styles/Colors'

const LoadingComp = ({visible}) => {
  return (
    <Modal visible={visible} animationType='fade' transparent={true}>
        <BlurView experimentalBlurMethod='dimezisBlurView' style={{flex:1, alignItems:'center', justifyContent:'center'}} intensity={30} tint='dark'>
            <ActivityIndicator size='large' color={Colors.secondary} />
        </BlurView>
    </Modal>
  )
}

export default LoadingComp

const styles = StyleSheet.create({})