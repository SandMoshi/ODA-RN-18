import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';

export default class ProgressBar extends React.Component{
    constructor(props){
        super();

        this.state={
            level: 1,
            xp: 50,
            barWidth: '50%',
        }
    }

    componentWillMount(){
        
    }

    componentDidUpdate(){
    }

    render(){

        return(
            <View style={styles.container}>
                <Text>Level: {this.state.level}</Text>
                <View style={styles.outline}>
                        {/* The progress "bar" */}
                        <LinearGradient
                            style={[styles.bar, {width: this.state.barWidth}]}
                            colors={['#F6CF01', '#F6CF01', '#cdaf0d']}
                            start={[0 , 0]}
                        >
                        </LinearGradient>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        bottom: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    outline:{
        width: '85%',
        height: 40,
        backgroundColor: '#555555',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    bar:{
        maxWidth: '92%',
        height: '50%',
        borderRadius: 20,
        marginLeft: '4%',
    },
})