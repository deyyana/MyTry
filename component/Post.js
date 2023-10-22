import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useEffect } from 'react';

export default function Post(props) {
  return (
    <View style={styles.container}>

      <View>
        <Image
          style={styles.image}
          source={props.photoURL}
          contentFit="cover"
          transition={1000}
        />
      </View>
      
      <View style = {{flex: 2}}>
      <View style={styles.topHeader}>
      <Text style={[styles.headerText,styles.bold]}>{props.name}</Text>
        <Text style={[styles.headerText,styles.gray]}>{props.username}</Text>
        <Text style={[styles.headerText,styles.gray]}>{props.createdAt}</Text>
      </View>

      <View style = {{flex: 1}}>
        <Text>
        {props.children}
        </Text>
      
      </View>

      <View  style={styles.postAction}>
          <TouchableOpacity style={styles.button}>
            <Text>
            <EvilIcons name="comment" size={24} color="black" />
              {props.comments}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text>
            <EvilIcons name="retweet" size={24} color="black" />
            {props.retweet}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text>
            <EvilIcons name="heart" size={23} color="black" />
            {props.likes}
            </Text>
          </TouchableOpacity>
          
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    padding: 10,
    //justifyContent : "flex-start",
    //alignItems : 'center',
    backgroundColor: 'beige',
    height: 'auto',
    width: 320,
    borderRadius: 23,
    borderColor: 'white',
    borderWidth: 2,
    // justifyContent :'center', //align x axis
    //alignItems :'center', //align y axis

  },
  image: {
    marginRight:8,
    height: 45,
    width: 45,
    borderRadius : 88,
  },
  topHeader : {
    flexDirection : 'row',
  },
  headerText :{
    marginRight:4,
    
  },
  bold:{
    fontWeight : 'bold',
  },
  Gray :{
    color : 'gray'
  },
  postAction:{
    flexDirection :'row',
    justifyContent: 'space-between',
  },
  button :{
    paddingRight : 5,
    paddingBottom : 5,
    flexDirection:'row',
    alignItem :'center',
  }
}
)