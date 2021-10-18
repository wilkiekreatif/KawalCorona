import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';
import HeaderImg from '../../asets/image/header.jpg';

const Menu = () =>{
    return{
        <View style = {{
            width: 149,
            height: 200,
            // backgroundColor: '#CCCCCC',
            borderColor: '#CCCCCC',
            borderWidth:2,
            borderRadius: 20,
            marginRight: 10
        }}>
            <Image  source={{uri:'https://placeimg.com/150/130/any'}}
                    style={{
                        width:148,
                        height:130,
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        }}/>
            < View style = {{
                flexDirection: 'row',
                height:30,
                // backgroundColor: 'white',
                paddingLeft: 5,
                alignItems:'center'
            }}>
                <Text style={{color:'black'}}>Pancake</Text>
                <View style={{backgroundColor:'green', height:20, width:20, borderRadius:10}}>
                </View>
            </View>
        </View>
    }
}

export default function Ispan() {
    return (
        <View>
            <View style={{backgroundColor:'black', width:'100%', height:40}}></View>
            <View style={styles.container}>
                <ImageBackground    style={styles.coverImage}
                                    source={HeaderImg}>
                    <View style={styles.textView}>
                        <Text style={styles.imageText}>List Menu</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={{alignItems:'center', paddingTop:10,marginBottom:10}}>
                <Text style={{fontSize:25, color:'black'}}>Menu hari ini</Text>
            </View>

            <ScrollView horizontal >
                    <View style = {{
                        flexDirection:'row',
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Menu />
                    </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
    },
    coverImage: {
        width: '100%',
        height: 120,
    },
    textView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    imageText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    }
})
