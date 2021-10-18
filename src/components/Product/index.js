import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import PIC from '../../asets/image/logo.jpg'

const Product = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image source={PIC} style={styles.img} />
            <Text style={styles.name}>Jasa Editing Gambar</Text>
            <Text style={styles.desc}>Rp.50.000,-</Text>
            <TouchableOpacity onPress={props.onButtonPress}>
                <View style={styles.btn}>
                    <Text style={styles.btntext}>BELI</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    wrapper: {
        margin: 12,
        padding: 12,
        backgroundColor: '#999087',
        width: 212,
        borderRadius: 10
    },
    img: {
        width: 188,
        height: 188,
        borderRadius: 10
    },
    name: {
        marginTop: 16,
        color: '#000000',
        fontWeight: 'bold'
    },
    desc: {
        marginTop: 14,
        color: '#FFF',
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#18BF65',
        height: 40,
        margin: 5,
        borderRadius: 50,
        paddingVertical: 6,
        marginTop: 20
    },
    btntext: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    }

})
