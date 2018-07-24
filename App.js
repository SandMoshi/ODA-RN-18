import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navbar from './components/navbar/Navbar';
import Fact from './components/fact/fact';
import facts from './json/facts';
import { AdMobBanner, AdMobInterstitial } from 'expo';

export default class App extends React.Component {

  constructor(props){
    super();

    this.getNewFact = this.getNewFact.bind(this);
    this.state = {
        newFact : null,
        viewedFacts: 0,
    }
  }

  componentDidMount(){
    this.loadInterstitial();
  }

  loadInterstitial(){
    AdMobInterstitial.setTestDeviceID("EMULATOR");
    //TEST ID
    AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712");
    //REAL ID
    // AdMobInterstitial.setAdUnitID("");

    
    AdMobInterstitial.requestAdAsync();

    //USELESS EVENT LISTENERS
    AdMobInterstitial.addEventListener("interstitialDidLoad", () => console.log("interstitial Did Load"));
    AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
      console.log("interstitialDid Fail To Load"));
    AdMobInterstitial.addEventListener("interstitialDidOpen", () =>
      console.log("interstitial Did Open")
    );
    AdMobInterstitial.addEventListener("interstitialDidClose", () => {
      AdMobInterstitial.requestAdAsync();
      console.log("interstitial Did Close")
    });
  }

  showInterstitialAd(){
    AdMobInterstitial.showAdAsync();
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }

  getNewFact(){
    //Increase Counter - for viewedFacts
    var counter = this.state.viewedFacts;
    counter++;
    var FactsPerAd = 3;
    if(counter > FactsPerAd){
      counter = 0;  //reset our counter for next time
      //Call our intersitial ad
      this.showInterstitialAd();
    }
    
      //Get a new random fact
      var max = facts.length - 1;
      var randomNum = Math.floor(Math.random() * Math.floor(max));
      this.setState({
        newFact: facts[randomNum][2],
        viewedFacts: counter,
      });
  }


  bannerError(){
    console.log("There was an error with our ad!");
    return;
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
        <AdMobBanner 
          style={styles.bottomBanner}
          bannerSize="smartBannerPortrait"

          //TEST ID
          adUnitID="ca-app-pub-3940256099942544/6300978111"

          //REAL ID
          // adUnitID="ca-app-pub-8922768677055340/6882468701"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError}
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
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0,
  }
});
