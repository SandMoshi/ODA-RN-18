import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default class Fact extends React.Component{

    constructor(props){
        super();
        this.state = {
        }
    }
    
    componentWillMount(){
    }
    
    render(){
        return(
            <Image 
                source={this.props.path}
                style={this.props.style}
            />
        )
    }
}