import React, { Component } from 'react';
import {Image, Text, TextInput, View, StyleSheet, TextComponent, ScrollView} from 'react-native';
import PIC from '../../asets/image/logo.jpg';
import SampleComponent from '../SampleComponent';

// Membuat Komponen Baru untuk belajar Styling
const StylingComponent = ()=>{
    return(
      <View>
        {/* Membuat style menggunakan component stylesheet */}
        <Text style={styling.Text}> test Component</Text>
  
        {/* Membuat style langsung pada komponennya */}
        <View style={{width:100,
                      height:100,
                      backgroundColor: '#0abde3',
                      borderWidth: 2,
                      borderColor: '#AC5234',
                      margin:20}}></View>
        <View style={{margin:12, padding: 12, backgroundColor:'#999087', width:212, borderRadius:10}}>
          <Image source={PIC} style={{width:188, height: 188, borderRadius:10}} />
          <Text style={{marginTop:16, color:'#000000', fontWeight:'bold'}}>WILKIE CREATIVE WORKS</Text>
          <Text style={{marginTop:14, color:'#FFF', fontWeight:'bold'}}>We Play with Creativity</Text>
          
          <View style={{backgroundColor:'#18BF65',
                        height:40,
                        margin:5,
                        borderRadius:50,
                        paddingVertical:6,
                        marginTop:20}}>
            <Text style={{textAlign:'center', fontSize:16,color:'white'}}>Visit Us</Text>
          </View>
        </View>
      </View>
    )
  
  }
  
  //Membuat Stylesheet untuk text pada Object StylingRNComponent
  const styling = StyleSheet.create({
    Text:{
      fontSize:20,
      fontWeight: 'bold',
      color:'#02A57B',
      marginLeft:20,
      marginTop:40,
    }
  });

export default StylingComponent;