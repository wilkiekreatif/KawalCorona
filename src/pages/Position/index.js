import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import cart from '../../asets/icon/cart.png'

export default function Position() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart}/>
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding:20,
        alignItems:'center'
    },
    cartWrapper:{
        borderWidth:1,
        borderColor: '#00D38E',
        width:40,
        height:40,
        borderRadius:80/2,
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    iconCart:{
        width:20,
        height:20
    },
    text:{
        fontSize:12,
        color:'#777777',
        fontWeight:'700',
        marginTop:8
    },
    notif:{
        fontSize:5,
        color:'white',
        backgroundColor: '#3A077D',
        paddingTop:1,
        paddingLeft:2,
        borderRadius:15/2,
        width:10,
        height:10, 
        position:'absolute',
        top:0,
        right:0
    }
})
