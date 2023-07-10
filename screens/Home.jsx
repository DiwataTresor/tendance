import { View, Text,Alert, Image, ImageBackground, TouchableOpacity,ScrollView } from 'react-native'
import { primary, style,secondary,thirty,firthy,forthy, sixty  } from '../style/Main'
import Button from '../components/Button'
import { HStack,Divider } from 'native-base'
import { MaterialCommunityIcons,Foundation } from '@expo/vector-icons'
import girlTendance from './../assets/girlTendance.png'
import Buttonpreference from '../components/Buttonpreference'
import Mur from './Mur'
import SectionLogin from './Home/SectionLogin'







const Home = () => {
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
    <View style={style.mainContainer}>
    <ScrollView style={{height:"100%"}}>

        {/* SECTION LOGIN */}
            <SectionLogin />
        {/* SECTION LOGIN */}
        
        <View style={{marginTop:10, alignContent:"center"}}>
            {/* <Text style={{color:forthy, fontWeight:'500',fontSize:20, textAlign:"left", marginRight:5}}>Bienvenu</Text> */}
            <View style={{justifyContent:"center", alignItems:"center"}}>
                <Text style={{textAlign:"center", marginTop:15, color:"#F4F4F8", fontSize:14, width:"100%",fontWeight:"200" }}>Restez tendance, faites-nous connaitre vos preferences : </Text>
            </View>
           
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
            
            <View style={{flexDirection:"row", flexWrap:'wrap', heigh:400, gap:9, marginTop:10, width:"60%"}}>
            {
                preferences.map((preference,i)=>{
                    return <Buttonpreference key={i} id={preference.id} text={preference.title} handleSelect={selectPreference} />
                })
            }
            </View>
            <View>
                <Image source={girlTendance} style={{resizeMode:'stretch', width:150, height:180}} />
            </View>
        </View>
        <Text style={{marginTop:15, color:"white", fontSize:18}}>Pour vous</Text>
        <Mur />
       
    </ScrollView>
    </View>
  )
}

export default Home