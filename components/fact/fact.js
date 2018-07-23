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
            <Text style={styles.text}>{this.props.newFactX}</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        width: '80%',
        textAlign: 'center',
        position: 'absolute',
        top: '30%',
    },
})