import React from "react"
import { View, Text, TextInput, Button } from "react-native"

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.68" keyboardType="numeric"></TextInput>
                
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 70" keyboardType="numeric"></TextInput>
                <Button title="Faca seu Calculo"/>
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
        </View>
    );
}