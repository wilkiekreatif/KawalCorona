import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import cart from '../../asets/icon/cart.png';

const Cart = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart}/>
                <Text style={styles.notif}>{props.jmlproduct}</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#00D38E',
        width: 60,
        height: 60,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    iconCart: {
        width: 50,
        height: 50
    },
    text: {
        textAlign:'center',
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 8
    },
    notif: {
        fontSize: 15,
        color: 'white',
        backgroundColor: '#3A077D',
        paddingTop: 1,
        paddingLeft: 2,
        borderRadius: 15,
        width: 30,
        height: 30,
        position: 'absolute',
        top: 0,
        right: 0
    }
})
