import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Navbar from './components/navbar/Navbar';
import Fact from './components/fact/fact';
import CustomImage from './components/customImage/customImage';
import ProgressBar from './components/progressbar/progressbar';
import facts from './json/facts';
import { AdMobBanner, AdMobInterstitial } from 'expo';

export default class App extends React.Component {

  constructor(props){
    super();

    this.getNewFact = this.getNewFact.bind(this);
    this.showNewImage = this.showNewImage.bind(this);
    this.getNewImage = this.getNewImage.bind(this);

    //Load all images
    this.images = {
      HA1 : require('./assets/FaceBoxes/HA/HA1.png'),
      HA2 : require('./assets/FaceBoxes/HA/HA2.png'),
      HA3 : require('./assets/FaceBoxes/HA/HA3.png'),
      HA4 : require('./assets/FaceBoxes/HA/HA4.png'),
      HA5 : require('./assets/FaceBoxes/HA/HA5.png'),
      LI1 : require('./assets/FaceBoxes/LI/LI1.png'),
      LI2 : require('./assets/FaceBoxes/LI/LI2.png'),
      LI3 : require('./assets/FaceBoxes/LI/LI3.png'),
      LI4 : require('./assets/FaceBoxes/LI/LI4.png'),
      LI5 : require('./assets/FaceBoxes/LI/LI5.png'),
      LO1 : require('./assets/FaceBoxes/LO/LO1.png'),
      LO2 : require('./assets/FaceBoxes/LO/LO2.png'),
      LO3 : require('./assets/FaceBoxes/LO/LO3.png'),
      LO4 : require('./assets/FaceBoxes/LO/LO4.png'),
      LO5 : require('./assets/FaceBoxes/LO/LO5.png'),
      NI1 : require('./assets/FaceBoxes/NI/NI1.png'),
      NI2 : require('./assets/FaceBoxes/NI/NI2.png'),
      NI3 : require('./assets/FaceBoxes/NI/NI3.png'),
      NI4 : require('./assets/FaceBoxes/NI/NI4.png'),
      NI5 : require('./assets/FaceBoxes/NI/NI5.png'),
      OD1 : require('./assets/FaceBoxes/OD/OD1.png'),
      OD2 : require('./assets/FaceBoxes/OD/OD2.png'),
      OD3 : require('./assets/FaceBoxes/OD/OD3.png'),
      OD4 : require('./assets/FaceBoxes/OD/OD4.png'),
      OD5 : require('./assets/FaceBoxes/OD/OD5.png'),
      ZA1 : require('./assets/FaceBoxes/ZA/ZA1.png'),
      ZA2 : require('./assets/FaceBoxes/ZA/ZA2.png'),
      ZA3 : require('./assets/FaceBoxes/ZA/ZA3.png'),
      ZA4 : require('./assets/FaceBoxes/ZA/ZA4.png'),
      ZA5 : require('./assets/FaceBoxes/ZA/ZA5.png'),
    }

    this.state = {
        newFact : null,
        viewedFacts: 0,
        totalFacts: 0,
        initialLoad: true,
        imageVisible: true,
        factTextColor: 'white',
        showButton: true,
    }
  }

  componentDidMount(){
    this.loadInterstitial();
  }

  loadInterstitial(){
    AdMobInterstitial.setTestDeviceID("EMULATOR");
    //TEST ID
    AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/6300978111");
    //REAL ID
    // AdMobInterstitial.setAdUnitID("ca-app-pub-8922768677055340/2819934767");

    
    AdMobInterstitial.requestAdAsync();

    //USELESS EVENT LISTENERS
    AdMobInterstitial.addEventListener("interstitialDidLoad", () => console.log("interstitial Did Load"));
    AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
      console.log("interstitial Did Fail To Load"));
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
    //Check and prevent doubleClick
    if(this.state.showButton){ 
      //Since the button IS visible, it is okay to run our usual code ...

      this.showNewImage();

      //Increase the XP
      this.newFactRequested();

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
          currentFactObject: facts[randomNum], 
          viewedFacts: counter,
        });

        this.getNewImage(facts[randomNum]);
    }

    // Since button is not visible, we don't run our usual code . . .
  }

  newFactRequested(){
    this.child.increaseXP();
  }

  showNewImage(){
    this.setState({
      imageVisible: true,
      factTextColor: 'transparent',
      showButton: false,
    })

    //Length to wait before hiding image and showing fact
    var timerLength = 900;

    //Hide image immediately if first load
    if(this.state.initialLoad){
      timerLength = 0;
      this.setState({
        initialLoad: false,
      })
    }

    //Wait before hiding the image and showing the fact
    setTimeout(() =>{
      this.setState({
        showButton: true,
      })
    }, 1000)

    setTimeout(() =>{
      this.setState({
        imageVisible: false,
        factTextColor: 'white',
      })
    }, timerLength)

  }

  getNewImage(currentFactObject){
    //Determine the necessary path for the facebox image
    var factType = currentFactObject[1];
    var max = 5;
    var RNG = Math.floor(Math.random() * Math.floor(max)) + 1 
    var imageFile = factType + RNG;

    this.setState({
      boxImagePath: imageFile,
    })
  }

  bannerError(){
    console.log("There was an error with our ad!");
    return;
  }

  render() {

    if(this.state.showButton){
      var displayValue = 1;
    }
    else{
      displayValue = 0;
    }

    if(!this.state.imageVisible){
      var imageContent = null;
    }
    else{
      var path2 = this.state.boxImagePath || 'OD1';
      console.log(path2);
      console.log(this.images);
      console.log(Object.keys(this.images).length);
      console.log(this.images[path2]);
      imageContent = 
        <CustomImage 
          path={this.images[path2]}
          style={styles.faceBox}
        />
    }


    return (
      <View style={styles.container}>
        <Navbar />
        <View style={styles.boxContainer}>
          {imageContent}
          <Fact  
            newFactX={this.state.newFact}
            color={this.state.factTextColor}
            style={styles.FactBox}
          />
        </View>
        <View 
          style={[styles.button, {opacity: displayValue}]}
          >
          <Text 
            style={styles.buttonText}
            onPress={this.getNewFact}
          > View a Fact</Text>
        </View>
        <ProgressBar onRef={ref => (this.child = ref)} />
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
  },
  button:{
    backgroundColor: '#DE3246',
    maxHeight: 45,
    borderRadius: 8,
    width: 160,
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    paddingTop: 6,
    paddingBottom: 10,
    borderRadius: 8,
    width: '100%',
    textAlign: 'center',
    height: '100%',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  faceBox:{
    position: 'absolute',
    top: 0,
    width: 250,
    height: 250,
    maxWidth: '100%',
    maxHeight: 300,
    zIndex: 1,
  },
  boxContainer: {
    // borderColor: 'red',
    // borderWidth: 3,
    width: '100%',
    height: '45%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  factBox:{
    position: 'absolute',
    top: 0,
    zIndex: 0,
  }
});
