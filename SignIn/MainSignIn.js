import { Button, Image, StyleSheet, Text, View } from "react-native";
import Logo from "@/components/SIGNIN/Logo";
import React from "react";
import InputText from "./InputText";
import SigninButton from "./SigninButton";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';



export default function SignIn() {
  return (
    <View style={styles.View1}>
      
      <InputText></InputText>
     
      <SigninButton name="Login" />
      <SigninButton name="Forgot Password?"/>
      
      <View style={styles.View2}>
        <Text style={styles.text1} >Or signin using?</Text>
        <View style={styles.View3}>
            <Image style={styles.google}source={require("@/assets/images/googlesmall.png")}/>
        </View>
        <View style={styles.View4}>
            <Image source={require("@/assets/images/Facebook.png")}style={styles.facebook} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View1: {
    backgroundColor:"white"
  },
  View2: {
    marginTop: 20,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    gap:10,
    position:"relative",
    width:"100%",
    height:180,

  },
  View3:{
    height:35,
    width:35
  },
  text1:{
    position:"absolute",
    top:"25%",

    
  },
  View4:{
    height:35,
    width:35
  },
  google:{
    width:35,
    height:35,
    resizeMode:"contain"
  },
  facebook:{
    width:35,
    height:35,
    resizeMode:"contain"
  }
});
