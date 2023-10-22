import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
// import Post from '../components/Post';
import { useEffect, useState } from 'react';
import Post from '../component/Post';

export default function Homescreen() {
  const[post , setPost ]=useState([])
  useEffect(()=>{

    fetch ('https://workshop.elyasasmad.com/posts')
      .then((response)=>response.json())
      .then((data)=>{
        setPost(data)
      })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={post}
        renderItem={({item})=><Post likes={item.data.likes}
        comments={item.data.comments}
        retweeet={item.data.retweet}
        name ={item.name}
        username ={item.username}
        createdAt ={item.createdAt}
        photoURL={item.photoURL}
        >
          {item.content}
          </Post>}
        keyExtractor={(item)=>item.id}
       />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',//x axis
    justifyContent: 'center',
    paddingTop:48
  },
});