import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Cart from '../../components/Cart'
import Product from '../../components/Product'

const Communication = () => {
    const [totalproduct,setTotalProduct] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Komunikasi antar Komponen</Text>
            <Product onButtonPress={() => setTotalProduct(totalproduct+1)}/>
            <Cart jmlproduct={totalproduct}/>
        </View>
    )
}

export default Communication

const styles = StyleSheet.create({
    container: {
        padding:20
    },
    textTitle:{
        textAlign:'center'
    }
})