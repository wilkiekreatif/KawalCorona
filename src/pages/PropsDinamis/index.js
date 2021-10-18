import React from 'react'
import { View, Text,Image, ScrollView } from 'react-native'


//penulisan Functional Component dalam bentuk lain
//pembentukan Component Props Dinamis
const Story = (props) => {
    return (
        <View style={{margin:10}}>
            <View style={{  
                            // backgroundColor:'red',
                            flex:1,
                            alignItems:'center'
                        }}>
                <Image  source={{uri:props.gambar}}
                        style={{width:50, height:50, borderRadius:50/2,}}/>
                <Text style={{maxWidth:50,textAlign:'center'}}>{props.judul}</Text>
            </View>
        </View>
    )
}

export default function PropsDinamis() {
    return (
        <View>
            {/* <Text style={{marginBottom:10, textAlign:'center', flex:1, fontSize:30}}>Materi Props Dinamis</Text> */}
            <ScrollView horizontal>
                <View style = {
                    {
                        // backgroundColor: 'red',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }
                } >
                    <Story judul='Youtube Channel' gambar='https://placeimg.com/50/50/tech'/>
                    <Story judul='E Commerce' gambar='https://placeimg.com/50/50/any'/>
                    <Story judul='Social Media' gambar='https://placeimg.com/50/50/nature'/>
                    <Story judul='Youtube Channel' gambar='https://placeimg.com/50/50/tech'/>
                    <Story judul='E Commerce' gambar='https://placeimg.com/50/50/any'/>
                    <Story judul='Social Media' gambar='https://placeimg.com/50/50/nature'/>
                    <Story judul='Youtube Channel' gambar='https://placeimg.com/50/50/tech'/>
                    <Story judul='E Commerce' gambar='https://placeimg.com/50/50/any'/>
                    <Story judul='Social Media' gambar='https://placeimg.com/50/50/nature'/>
                    <Story judul='Youtube Channel' gambar='https://placeimg.com/50/50/tech'/>
                    <Story judul='E Commerce' gambar='https://placeimg.com/50/50/any'/>
                    <Story judul='Social Media' gambar='https://placeimg.com/50/50/nature'/>
                </View>
            </ScrollView>
        </View>
    )
}


