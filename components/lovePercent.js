import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput, Appbar} from 'react-native-paper';
import Displaylove from './displayLove';
export class LovePecentage extends React.Component{
    state={
        fname:'',
        sname:'',
        result:''
    }
  
    submit(){
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
            headers:{
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
	"x-rapidapi-key": "bdc437a5c2msha6e60b239710d76p1d6bb8jsn3ec50e8fd690"
        }
        }).then(data=>data.json()).then(data2=>{console.log(data2);this.setState({
            result:data2
        })
        
    }).catch(err=>console.log(err))
    }
   
    render()
    {
        return(
            <View>
                <Appbar.Header >
        <Appbar.Content
          title="Love Percentage"
          subtitle="See how much you are loved by your Partner..!"
        />
      </Appbar.Header>
      <TextInput
        label='Your Name'
        placeholder="Your name Plz?"
        value={this.state.fname}
        style={{margin:10,marginTop:20}}
        onChangeText={text => this.setState({ fname:text })}
      />
      <TextInput
        label='Partners name'
        placeholder="Your Partners Name Plz?"
        value={this.state.sname}
        style={{margin:10,marginTop:20}}
        onChangeText={text => this.setState({ sname:text })}
      />
      <Button icon="heart" style={{margin:10,marginTop:20}} mode="contained" onPress={()=>this.submit()}>
   Love
  </Button>
  <Displaylove data={this.state.result}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        color:'#26FFE6'
    }
})