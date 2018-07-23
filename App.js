import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navbar from './components/navbar/Navbar';
import Fact from './components/fact/fact';
import facts from './json/facts';

export default class App extends React.Component {

  constructor(props){
    super();

    this.getNewFact = this.getNewFact.bind(this);
    this.state = {
        newFact : null
    }
  }

  getNewFact(){
    var max = facts.length - 1;
    var randomNum = Math.floor(Math.random() * Math.floor(max));
    this.setState({newFact: facts[randomNum][2]});
  }


  render() {
    return (
      <View style={styles.container}>
        <Navbar />
        <Fact  
          newFactX={this.state.newFact}
        />
        <Button 
          title="View Another Fact"
          color="#D8315B"
          onPress={this.getNewFact}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3892CC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
  }
});
