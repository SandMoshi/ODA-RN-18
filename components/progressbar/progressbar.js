import React from 'react';
import { NativeModules , LayoutAnimation, StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class ProgressBar extends React.Component{
    constructor(props){
        super();

        this.state={
            level: 1,
            xp: 0,
            barWidth: '7%',
        }
    }

    componentDidMount(){
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    componentWillMount(){
        
    };

    componentDidUpdate(){
    };

    increaseXP(){
        LayoutAnimation.easeInEaseOut();
        //Every time this function runs, increase by xp 25%
        var xp = this.state.xp;

        xp += 25;
        
        //Check for level up
        if(xp == 100){
            this.increaseLevel();
            setTimeout(() =>{
                xp = 0;
                this.setState({
                    xp: xp,
                    barWidth: '7%',
                })
            }, 1000)
        }
        
        var newBarWidth = xp + '%';
        
        this.setState({
            xp: xp,
            barWidth: newBarWidth
        })


    }

    increaseLevel(){
        var level = this.state.level;
        level++;
        this.setState({
            level: level,
        })
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
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        marginLeft: '4%',
    },
})