import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Button,
  Platform,
  StatusBar,
  useWindowDimensions,
  View,
  Dimensions,
  TouchableHighlight,
  Alert
  } from 'react-native';
  import { useDeviceOrientation } from  "@react-native-community/hooks";
  import React, { Component } from 'react'


export default class App extends Component {
  state = {
    text1: 'Hello Anji!',
    text2: 'Press Me!'

  }
  
  changeText = () => {
    this.setState({
      text1: 'You\'re the only person that can bring out the happiest and saddest version of me, and for that, I thank you and I\'ll choose to love you every single day, Happy 16th Monthsary Juju!',
      text2: "I love you <3"
    })
    Alert.alert("Happy 16th", "Do you love me?", [
      {text: "Yes so much!",
        onPress: () => {Alert.alert("Mwamwaaa", "Yay! Happy Monthsary wuvwuvvv! <3")}
        
      },
      { text: "Yes",
        onPress: () => {Alert.alert("I love you more!", "Kith ka sakin maya")}
      },
      {text: "No",
        onPress: () => {Alert.alert("Bad ka", "Me xad :((")}
      }
    ])
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{this.state.text1}</Text>
        <TouchableHighlight 
        style={styles.button1}
        onPress={this.changeText}
        underlayColor="white">
          <Text style={styles.buttonText}>{this.state.text2}</Text>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDFFD2",
    width: "100%",

  },
  button1: {
    width: 180,
    height: 55,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFB4C2",
    backgroundColor: "#FFB4C2",
    overflow: "hidden",
    justifyContent: "center",
    elevation: 10,
    marginTop: 30,
    position: "absolute",
    bottom: 150,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    textAlignVertical: "center",
    fontWeight: "bold",
    color: "#667BC6",
    elevation: 3,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 30,
    color: "#667BC6",
    elevation: 10,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
  }
})
