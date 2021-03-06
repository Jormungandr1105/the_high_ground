import React, { Component } from 'react';
import { View, StyleSheet, Button, ToastAndroid, AppRegistry} from 'react-native';
import firebase from 'react-native-firebase';
import t from 'tcomb-form-native'; // 0.6.9
import icon from "./assets/icon.png";
// import 'react-native-twilio';
const twilio = require('react-native-twilio');

// var client = new twilio();
// twilio.initWithToken();

const Form = t.form.Form;

const User = t.struct({
  FirstName: t.String,
  LastName: t.maybe(t.String),
  PhoneNumber: t.Number,
  terms: t.Boolean
});

// //////// FIREBASE SETUP /////////////



// <script src="https:\/\/www.gstatic.com/firebasejs/7.2.3/firebase-app.js">

var firebaseConfig = {
  apiKey: ""
  authDomain: "intricate-yew-257819.firebaseapp.com",
  databaseURL: "https:\/\/intricate-yew-257819.firebaseio.com",
  projectId: "intricate-yew-257819",
  storageBucket: "intricate-yew-257819.appspot.com",
  messagingSenderId: "473804431377",
  appId: "1:473804431377:web:b3a591790492af1aed11b0",
  measurementId: "G-157FMN6TMZ"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// var firebaseConfig = {
//   apiKey: "AIzaSyCvEmaBPGgcIsDgA5QwNuhhm9Au5tAPsdI",
//   authDomain: "intricate-yew-257819.firebaseapp.com",
//   databaseURL: "https://intricate-yew-257819.firebaseio.com",
//   projectId: "intricate-yew-257819",
//   storageBucket: "intricate-yew-257819.appspot.com",
//   messagingSenderId: "473804431377",
//   appId: "1:473804431377:web:74f33de43cf70559ed11b0",
//   measurementId: "G-GBG195G048"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


const options = {
  fields: {
    FirstName: {
      error: 'Your first name is needed to be added to our database!'
    },
    PhoneNumber: {
      error: 'Your phone number is used to send alerts to your phone with emergency mapping information!'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
};

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
};


///////////////////////////////////////////////////////////////////////////////////////

function sendPosistion(posistion){
  console.log('posistion: ', posistion);
  ToastAndroid.show(posistion.coords.latitude,5);
  //sNodeLat - firebase attributes
  ToastAndroid.show(posistion.coords.longitude,5);
  //sNodeLon - firebase attributes

  //@// TODO: get location to the db

};


export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    console.log('Twilio Send Message ', 'test');

    // client.messages.create({
    // to: '+13154201533',
    // from: '+12564084538',
    // body: 'Hello from The Higher Ground! Please enjoy peace of mind'
    // });
    // client.sendMessage();
    console.log('Twilio Send Message ', 'test');


    if (value !== null){

      ToastAndroid.show("You've been registered ".concat(value.FirstName,"!"), 15);
    };

    navigator.geolocation.getCurrentPosition(sendPosistion);


    // BOOO poor form
    //this needs to be replaced with a listener to the database
    while (1===1){
      setTimeout(function(){

        ToastAndroid.show("success",1);

        //@TODO update location on firedb

        //@TODO check fire db for true or false flood // WARNING:
        var Firebase_warning = true; //@DEBUG

        if (Firebase_warning){
          //@// DEBUG:
          //get lat long best path from db

          //make that into a google maps thing.
          var g_maps = 'https://goo.gl/maps/HpghSqdzyCNGxxiR7';
          // Send the text message using twilio
          // client.messages.create({
          // to: value.PhoneNumber,
          // from: '+12564084538',
          // body: 'EMERGENCY FLOOD WARNING: SEEK SHELTER AT THE FOLLOWING LOCATION IMMEDIATLY '.concat(g_maps)
          // });
          // client.sendMessage();
        }
        //@TODO get start and end coords from databaseURL
        //@TODO integrate google maps

      }, 2000); // Delay in ms  - 900000 is 15 min interval
    }

  }


  render() {
    return (

      <View style = {styles.container} >

      <script src="https:\/\/www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
      <script>

       };


      </script>

        <Form
          ref={c => this._form = c}
          type={User}
          options={options}
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
