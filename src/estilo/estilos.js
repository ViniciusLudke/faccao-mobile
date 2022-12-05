import React from 'react';
import {
    StyleSheet,
  } from 'react-native';

  
const styles = StyleSheet.create({
    aligin:{
  
      flexDirection:'row',
      alignSelf:'center',
      justifyContent:'flex-start',
  
    },
    Button3:{
      width: '25%',
      borderRadius: 7,
      padding: 10,
      margin: 15 ,
      color: '#35AAFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    TextDropDown:{
      fontSize: 15,
      color:'#FFFFFF',
    },

    Modal:{
      fontSize: 15,
      width:180,
    },

    imageFundo: {
      
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  
    Button4:{
      backgroundColor:'#35AAFF',
      width: '25%',
      borderRadius: 7,
      padding: 10,
      marginHorizontal: 15 ,
      marginVertical:10,
      color: '#35AAFF',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    
    pButton:{
      backgroundColor:'#35AAFF',
      width: '45%',
      borderRadius: 7,
      margin: 15 ,
      color: '#35AAFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    side:{
      alignItems: 'stretch',
      justifyContent: 'space-between',
    },
    head: {
      alignItems: 'baseline',
      justifyContent: 'center', 
      flexDirection: "row"
      },
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignContent: 'center',
      backgroundColor:'aliceblue',
    },
    lista:{
      marginTop: 10,
      height: '45%',
    },
    cell:{
      paddingTop:20,
      paddingBottom:20,
      backgroundColor:'#E4EBEE',
      fontSize:15,
      marginBottom: 2,
    },
    input:{
      backgroundColor:'#FFF',
      width: '90%',
      marginBottom:15,
      color: '#222',
      fontSize: 15,
      borderRadius: 7,
      padding: 10,
      alignSelf: 'center'
  
    },
    btnSubmit:{
      backgroundColor:'#35AAFF',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginHorizontal: 15 ,
      marginVertical:5,
    },
    btnRefrash:{
      backgroundColor:'#cbdae1',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginHorizontal: 15 ,
    },
    btnRefrashEnabled:{
      backgroundColor:'#ff8c17',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginHorizontal: 15 ,
    },
    textButton:{
      fontSize: 15,
      color:'#FFFFFF',
    },
    text2:{
      fontSize: 15,
      fontWeight: 'bold'
    },
    separator: {
      marginVertical: 10,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    background:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor:'aliceblue'
      },
  });

export default styles;