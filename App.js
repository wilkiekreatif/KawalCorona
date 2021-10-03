import React, { Component } from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
      <View>
        <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}></View>
        <Text>Wildan</Text>
        {/* Menampilkan Component Test diluar komponen App */}
        <Test/> 
        <Text>Kiki</Text>
        <Text>Zain</Text>
        <Photo/>
        <TextInput style={{borderWidth:1}}/>
        <BoxGreen/>
      </View>
  );
}

// Membuat Component menggunakan metode Functional Component
const Test = () => {
  return <Text>Auliana</Text>
}

const Photo = () =>{
  return <Image source={{ uri: 'https://placeimg.com/100/100/tech'}}
                style={{width:100, height:100}}/>
}

// Membuat Component menggunakan metode Class Component
  class BoxGreen extends Component {
    render(){
      return (
        <View>
          <Image source={{ uri: 'https://placeimg.com/100/100/nature'}}
                  style={{width:100, height:100}}/>
          <Text>Ini gambar Alam</Text>
        </View>
      );
    }
  }

export default App;