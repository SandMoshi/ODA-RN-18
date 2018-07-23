import React from 'react';
import { StyleSheet, Text} from 'react-native';

export default class Navbar extends React.Component{

    render(){
        return(
            <Text style={styles.text}>ONE DIRECTION FACTS</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        width: '100%',
        backgroundColor: 'white',
        textAlign: 'center',
        position: 'absolute',
        height: '5%',
        top: '3%',
        textAlignVertical: 'center',
    },
})