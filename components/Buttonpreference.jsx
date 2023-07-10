import { View, Text, StyleSheet, TouchableOpacity,Alert } from "react-native";
import { useEffect, useState } from "react";
import { primary, secondary, thirty, forthy, firthy,sixty } from "../style/Main";
import { AntDesign } from '@expo/vector-icons';


const Buttonpreference = ({ text,seleted, id, onPress,handleSelect }) => {
   const [selected,setSelected]=useState(false);
    const selectionner=()=>{
       setSelected(!selected);
       
    }
    useEffect(()=>{
       
    },[selected])
  return (
    <TouchableOpacity onPress={()=>{handleSelect(id,!selected); selectionner()}}>
      <View style={[style.btn,{backgroundColor:selected ? primary:sixty}]} >
        <Text style={[style.txt,{color:"white"}]}>{selected?"-":"+"}  {text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  btn: {
   
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    color: secondary,
    
  },
  txt: {
    color: secondary,
    fontVariant: "bold",
    fontSize:11
  },
});

export default Buttonpreference;
