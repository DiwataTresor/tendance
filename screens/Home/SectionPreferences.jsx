import { View, Text } from 'react-native'
import React from 'react'

const SectionPreferences = () => {
  return (
    <View>
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
    </View>
  )
}

export default SectionPreferences