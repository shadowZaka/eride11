import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  KeyboardAvoidingView,
  ToastAndroid
} from "react-native";

import firebase from "firebase";

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
  
    handleLogin = (email, password) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.navigate("BottomTab");
        })
        .catch(error => {
          Alert.alert(error.message);
        });
    };

    render() {
        const { email, password } = this.state;
        return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.upperContainer}>
              <Image source={appIcon} style={styles.appIcon} />
              <Text style={styles.title}>e-ride</Text>
              <Text style={styles.subtitle}>A Eco-Friendly Ride</Text>
            </View>
            <View style={styles.lowerContainer}>
              <TextInput
                style={styles.textinput}
                onChangeText={text => this.setState({ email: text })}
                placeholder={"Enter Email"}
                placeholderTextColor={"#FFFFFF"}
                autoFocus
              />
              <TextInput
                style={[styles.textinput, { marginTop: 20 }]}
                onChangeText={text => this.setState({ password: text })}
                placeholder={"Enter Password"}
                placeholderTextColor={"#FFFFFF"}
                secureTextEntry
              />
              <TouchableOpacity
                style={[styles.button, { marginTop: 20 }]}
                onPress={() => this.handleLogin(email, password)}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        );
      }
    }