import React, {Component, useEffect,useState} from "react";
import { Text, View,Image, StyleSheet } from "react-native";

// class FlexBox extends Component{
//     constructor(props){
//         super(props);
//         console.log('==> constructor');
//         this.state = {
//             subscriber :200,
//         }
//     }

//     componentDidMount(){
//         console.log('==> Component Did Mount');
//         setTimeout(() => {
//             this.setState({
//                 subscriber:400,
//         });
//         }, 2000);
//     }

//     componentDidUpdate(){
//         console.log('==> ComponentDid Update');
        
//     }

//     componentWillUnmount(){
//         console.log('==>Component Will Unmount');
//     }

//     render(){
//         console.log('==> Render');
//         return (
//             <View>
//                 {/* HEADER */}
//                 <View>
//                     <Image  source={{uri:'http://placeimg.com/500/100/tech'}}
//                             style ={{width:500, height:150}}/>

//                     <View style={{flexDirection:'row', alignItems:'center'}}>
//                         < View style = {{flexDirection: 'row',alignItems: 'center'}} >
//                             <Image  source={{uri:'http://placeimg.com/100/100/people'}}
//                                     style ={{width:50, height:50, borderRadius:25, marginLeft:10,marginVertical:10}}/>
//                             <View style={{marginLeft:12}}>
//                                 <Text style={{fontWeight:'bold'}}>Wildan Auliana</Text>
//                                 <Text style={{fontSize:10}}>{this.state.subscriber} jt Subscriber</Text>
//                             </View>
//                         </View>

//                         <View style={{flexDirection:'row', justifyContent:'flex-end', flex:1, margin:10}}>
//                             <View style={Styling.btn}>
//                                 <Text style={Styling.txt}>Sesuaikan</Text>
//                             </View>
//                             <View style={Styling.btn}>
//                                 <Text style={Styling.txt}>Edit Video</Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>


//                 <View style={{flexDirection:'row'}}>
//                     {/* <Text>Test menggunakan Class Flexbox terpisah</Text> */}
//                     <View style={{backgroundColor:'#FE3641', width:50, height:5}}></View>
//                     <View style={{backgroundColor:'#FCC32A', flex:1, height:5}}></View>
//                     <View style={{backgroundColor:'#00D38E', flex:2, height:5}}></View>
//                     <View style={{backgroundColor:'#6306CD', flex:3, height:5}}></View>
//                 </View>    
//             </View>
//         )
//     }
// }

// const Styling = StyleSheet.create({
//     btn:{
//         backgroundColor: '#00D38E',
//         padding: 5,
//         margin:5,
//         borderRadius:10,
//     },
//     txt:{
//         color:'#fff'
//     }
// })

export default function FlexBox() {
    const [subscriber, setSubscriber] = useState(2)
    useEffect(() => {
        console.log('Did Mount');
        setTimeout(() => {
            setSubscriber(400);
        },2000);
        return () =>{
            console.log('Did Update 1');
        };
    }, [subscriber])

    // code useEffect Sebelunm disederhanakan
    // useEffect(() => {
    //     console.log('Did Update')
    //     setTimeout(() => { 
    //         setsubscriber(400)
    //     },2000)
    // }, [subscriber])

    return (
        < View >
            {/* HEADER */}
            <View>
                <Image  source={{uri:'http://placeimg.com/500/100/tech'}}
                                style ={{width:500, height:150}}/> 

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    < View style = {{flexDirection: 'row',alignItems: 'center'}} >
                        <Image  source={{uri:'http://placeimg.com/100/100/people'}}
                                style ={{width:50, height:50, borderRadius:25, marginLeft:10,marginVertical:10}}/>
                        <View style={{marginLeft:12}}>
                            <Text style={{fontWeight:'bold'}}>Wildan Auliana</Text>
                            <Text style={{fontSize:10}}>{subscriber} jt Subscriber</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'flex-end', flex:1, margin:10}}>
                        <View style={Styling.btn}>
                            <Text style={Styling.txt}>Sesuaikan</Text>
                        </View>
                        <View style={Styling.btn}>
                            <Text style={Styling.txt}>Edit Video</Text> 
                        </View>
                    </View>
                </View>
            </View>


            <View style={{flexDirection:'row'}}>
                {/* <Text>Test menggunakan Class Flexbox terpisah</Text> */}
                <View style={{backgroundColor:'#FE3641', width:50, height:5}}></View>
                <View style={{backgroundColor:'#FCC32A', flex:1, height:5}}></View>
                <View style={{backgroundColor:'#00D38E', flex:2, height:5}}></View>
                <View style={{backgroundColor:'#6306CD', flex:3, height:5}}></View>
            </View>    
        </View>
    )
}

const Styling = StyleSheet.create({
    btn:{
        backgroundColor: '#00D38E',
        padding: 5,
        margin:5,
        borderRadius:10,
    },
    txt:{
        color:'#fff'
    }
})

// export default FlexBox; 