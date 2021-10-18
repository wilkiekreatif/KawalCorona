import React, { Component, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AlatHitung = () => {
    //membuat Array bernama number
    const [number, setNumber] = useState(0)
    return(
        <View>
            <Text>{number}</Text>
            <Button style={{borderRadius:10}} title='TAMBAH dengan FUNCTIONAL (HOOKS)' onPress={()=> setNumber(number+1)}/>
        </View>
    )
}

class AlatHitungClass extends Component {
    state = {
        number: 0
    }
    render(){
        return(
            <View>
            <Text>{this.state.number}</Text>
            <Button style={{borderRadius:10}} title='TAMBAH dengan CLASS'
                    onPress={() => this.setState({number: this.state.number + 1})}
            />
        </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Materi Component Dinamis dengan State</Text>
            <AlatHitung/>
            <AlatHitung/>
            <AlatHitungClass/>
            < AlatHitungClass/>
        </View>
    )
}

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper:{
        padding:20,
    },
    textTitle:{
        textAlign:'center',
    },
})