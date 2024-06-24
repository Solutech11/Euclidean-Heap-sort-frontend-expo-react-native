import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Styles/Colors'
import GeneralStyle from '../Styles/General.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextStyleStyle from '../Styles/TextStyle.style'
import ScaleSize from '../Component/scaleSize.Comp'
import Br from '../Component/Br.Comp'
import { StatusBar } from 'expo-status-bar'

const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={[GeneralStyle.Container,{backgroundColor:Colors.primary, justifyContent:'space-between'}]}>
        <StatusBar style='dark' />
        
        {/* toptext */}
        <View>
            <Text style={[TextStyleStyle._38Sen800,{color:Colors.white, width:377}]}>Heap Sort{`\n`}Euclidean Algorithm</Text>
            
            <Br height={10}/>
            <Text style={[TextStyleStyle._15Signika400, {color:Colors.white,lineHeight:ScaleSize(18), letterSpacing:ScaleSize(-0.5)}]}>
                Adigwerex Kasoludo .E LUC-NGA-001-ADM-1000654{`\n`}
                Aisha Abdulkareem .O  LUC-NGA-001-ADM-1000656{`\n`}
                Micheal Divine Ose LUC-NGA-001-ADM-1000948{`\n`}
                Uligwe Chisom .B LUC-NGA-001-ADM-1000679{`\n`}
                Aliyu Saminu .I LUC-NGA-001-ADM-1001007{`\n`}
                John Tombra Ogori LUC-NGA-001-ADM-1000851{`\n`}
            </Text>
        </View>

        <Image style={{width:ScaleSize(379), height:ScaleSize(366),alignSelf:'center'}} re source={require('../assets/financialGraph.png')} />

        <TouchableOpacity onPress={()=>navigation.push('SelectionScreen')} style={{width:'100%', height:ScaleSize(61), alignItems:'center',justifyContent:'center', backgroundColor:Colors.white, borderRadius:40 }}>
            <Text style={TextStyleStyle._20Signika500}>Get Started</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Splash