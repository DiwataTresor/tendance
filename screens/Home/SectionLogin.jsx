import { View, Text,Alert, Image, ImageBackground, TouchableOpacity,ScrollView } from 'react-native'
import { primary, style,secondary,thirty,firthy,forthy, sixty  } from '../../style/Main'
import Button from '../../components/Button'
import { HStack,Divider } from 'native-base'
import { MaterialCommunityIcons,Foundation } from '@expo/vector-icons'







const SectionLogin = () => {
    const click=()=>{
        Alert.alert("tetst");
    }
    const preferences = [
        {
            title: "Salon de coiffure",
            id:3
        },
        {
            title: "sac",
            id:1
        } ,
        {
            title: "Pantanlon",
            id:2
        },
        {
            title: "Plante",
            id:6
        },,
        {
            title: "Maquilleur",
            id:4
        },
        {
            title: "Boutique",
            id:1
        },
       
        {
            title: "Chaussures",
            id:4
        },
        {
            title: "Chemises",
            id:5
        }
    ]
    const selectPreference=(id,selected)=>{
        selected?Alert.alert(`${id}`):null;
    }
  return (
    <View>
        <HStack justifyContent={'space-between'} style={{marginTop:20,alignContent:"center"}}>
            {/* <Image source={girlTendance} style={{width:250, height:70, resizeMode:"contain"}} /> */}
            <Text style={{marginTop:5}}>Tendance</Text>
            <Button borderRadius={20} icon={<Foundation name='at-sign' size={24} />} title={"Créer un compte"} variant="white" />
        </HStack> 
        <View style={{marginTop:13}}>
            <TouchableOpacity>
                <Text style={{textAlign:'right', color:"white"}}>J'ai un compte, je me connecte</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
  }
  export default SectionLogin
