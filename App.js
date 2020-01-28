import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView, TouchableOpacity,TextInput,Button } from 'react-native';

export default function App() {
  const [todo, setTodo]=useState([
    {todoname:'NIhal', key:'1'},
    {todoname:'ratan', key:'2'},
    {todoname:'himani', key:'3'}
  ])
  const pressHandler=(key)=>{
   
      setTodo((prevtodo)=>{
        return prevtodo.filter(todo =>todo.key!=key) 
      }
      )
  }
 
  const [text, setText]=useState('');
  const changeHandler=(val)=>{
    setText(val)
  }
  const submitHandler=(text)=>{
   if(text==''){
     alert("cantaff")
   }
   else{
    setTodo((prevtodo)=>{
      return[
        {todoname: text, key: Math.random().toString()},
        ...prevtodo
      ]
    })
      }
    }
  return (
    <View style={styles.container}>
      <Text>Todo App</Text>
     <TextInput placeholder="enter" onChangeText={changeHandler}></TextInput>
     <Button
     onPress={()=>submitHandler(text)}
     title='Add'
     />
 {/* <ScrollView>
 {
        todo.map((item)=>{
          return(
            <View key={item.key}>
         <Text>{item.todoname}</Text>
          </View>
          )
        })
      }
   </ScrollView> */}
      <FlatList 
      data={todo}
      renderItem= {({item})=>(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
      <Text>{item.todoname}{item.key}</Text>
      </TouchableOpacity>
      )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
