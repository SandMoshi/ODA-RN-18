import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Fact extends React.Component{

    constructor(props){
        super();
        this.state = {
            currentFact : "none",
        }
    }
    
    componentWillMount(){
    }
    
    render(){
        return(
            <Text style={[styles.text , {color: this.props.color}]}>{this.props.newFactX}</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        width: '80%',
        maxWidth: 250,
        textAlign: 'center',
        marginBottom: '15%',
        marginTop: '5%',
        // position: 'absolute',
        // top: '30%',
        // color: 'white',
        fontSize: 24,
    },
})