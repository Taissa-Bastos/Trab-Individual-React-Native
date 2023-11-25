import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { TextInput, Button } from "react-native-paper";

const Cadastro = () => {
  return (
    <View style={{backgroundColor:"black", flex:1, justifyContent:"space-between"}}>
        <View>
        <View style={{alignItems:'center', width:'100%', marginTop:30}}>
      <Image
        source={require("../../assets/X.png")} 
        style={{ width: 30, height: 30 }}
        resizeMode="contain"
      />
      </View>
        <Text style={{fontWeight:"bold", color:'white', fontSize:25}}>
        Para começar, informe telefone, e-mail ou @nomedeusuario
        </Text>
     <TextInput
        mode="outlined"
        label="Celular, e-mail ou nome de usuário"
        theme={{
            colors: {
              primary: 'white',
              underlineColor: 'white',
            },
          }}
          style={{
            backgroundColor: 'black',
          }}
      />
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>

      <TouchableOpacity style={{borderRadius:25, backgroundColor:'black', borderColor:'white', width:180
        ,justifyContent:'center', alignItems:'center',borderWidth:2}}>
        <Text style={{color:'white', fontWeight:'bold'}}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:25, backgroundColor:'white', width:90
        ,justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight:'bold'}}>Avançar</Text>
      </TouchableOpacity>
      
    </View>
    </View>
  )
}

export default Cadastro