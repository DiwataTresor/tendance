import { View, Text, TouchableOpacity } from 'react-native'
import { style,primary,secondary,thirty } from '../style/Main'
import { StatusBar } from 'native-base'


const Button = ({onPress, variant, title,icon,borderRadius, textSize}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{minWidth:200, height:40, paddingHorizontal:"auto", justifyContent:"center", alignContent:"center", alignItems:"center", backgroundColor:primary, borderRadius:borderRadius || 5}}>
        <Text style={{
                color:variant=="thirty"?thirty:variant=="primary"?primary:variant=="secondary"? secondary:"#FFFFFF", fontSize:textSize || 16}}>

            {icon || null} {title || "Button"}
        </Text>
    </View>
    </TouchableOpacity>
  )
}

export default Button