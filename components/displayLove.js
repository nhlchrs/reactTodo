import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Displaylove(props){
    if(props.data.result=='loading'){
        <Text></Text>
    }
    else if(props.data.result==''){
        <Text>Still Loading</Text>
    }
    else{
    return(
        <View>
<Text style={styles.text}>{props.data.percentage}</Text>
<Text style={styles.text}>{props.data.result}</Text>
        </View>

    )
}
}
const styles= StyleSheet.create({
    text:{
        fontSize:30,
        textAlign:'center',
        fontFamily:'snas-serif'
    }
})