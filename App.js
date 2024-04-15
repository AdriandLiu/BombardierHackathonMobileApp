

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity, TestInput} from 'react-native';
// import {AppContainer} from './router'

// import {createAppContainer} from 'react-navigation'
import {Dimensions, TouchableHighlight, Alert} from 'react-native';
import {StackNavigator, withNavigation, createAppContainer } from 'react-navigation';
import {Icon} from 'react-native-elements';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'

import Aircrafts from './screens/bookcase';
import Explore from './screens/explore';
import AddBook from './screens/addBook';
import Lists from './screens/lists';
import Profile from './screens/profile';
import AircraftStatus from './screens/editAircraft'
import LoginView from './screens/login'

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
    'Aircrafts': {
        screen: Aircrafts,
        navigationOptions: {
            tabBarLabel: 'Aircrafts',
            tabBarIcon: ({tintColor}) => <Icon name="aircraft" type="entypo" size={28} color={tintColor}/>
        },
    },
    'Explore': {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({tintColor}) => <Icon name="ios-map" type="ionicon" size={28} color={tintColor}/>
        },
    },
    'Add Service': {
        screen: AddBook,
        navigationOptions: {
            tabBarLabel: 'Add Service',
            tabBarIcon: ({tintColor}) => <Icon name="ios-add-circle-outline" type="ionicon" size={28}
                                               color={tintColor}/>
        },
    },
    'Approves': {
        screen: Lists,
        navigationOptions: {
            tabBarLabel: 'Approves',
            tabBarIcon: ({tintColor}) => <Icon name="list" type="entypo" size={28} color={tintColor}/>
        },
    },
    'My Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-person" type="ionicon" size={28} color={tintColor}/>
        },
    },
});

export const BookcaseStack = createStackNavigator({
    Aircrafts: {
        screen: Aircrafts,
        navigationOptions: ({navigation}) => ({
            headerShown: false,
        }),
    },
    AircraftStatus: {
        screen: AircraftStatus,
        navigationOptions: ({navigation}) => ({
            headerShown: false,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
});

const CreateRootNavigator = createStackNavigator(
        {
            Tabs: {
                screen: Tabs,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            BookcaseStack: {
                screen: BookcaseStack,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            }

        },
        {
            headerMode: "none",
            mode: "modal"
        }
    );





    /* import { StatusBar } from "expo-status-bar";
    import React from "react";
    import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
    import logo from "./assets/logo.png";
    import * as ImagePicker from "expo-image-picker";
    import * as Sharing from "expo-sharing";
    import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

    export default function App() {
      const [selectedImage, setSelectedImage] = React.useState(null);
      let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
          return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
      };

      let openShareDialogAsync = async () => {
        if (!(await Sharing.isAvailableAsync())) {
          alert(`Uh oh, sharing isn't available on your platform`);
          return;
        }

        await Sharing.shareAsync(selectedImage.localUri);
      };

      if (selectedImage !== null) {
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
            <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
              <Text style={styles.buttonText}>Share this photo</Text>
            </TouchableOpacity>
          </View>
        );
      }
      return (
        <View style={styles.container}>
          <Image
            source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
            style={styles.logo}
          />
          <Text style={styles.instructions}>
            To share a photo from your phone with a friend, just press the button
            below!
          </Text>

          <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
            <Text style={styles.buttonText}>Pick a photo</Text>
          </TouchableOpacity>
        </View>
      );
    }

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center",
},
logo: {
width: 305,
height: 159,
marginBottom: 10,
},
instructions: {
color: "#888",
fontSize: 18,
marginHorizontal: 15,
},
button: {
backgroundColor: "blue",
padding: 20,
borderRadius: 5,
},
buttonText: {
fontSize: 20,
color: "#fff",
},
thumbnail: {
width: 300,
height: 300,
resizeMode: "contain",
},
});
     */



     const styles = StyleSheet.create({
       container: {
         flex: 1,
         backgroundColor: "#fff",
         alignItems: "center",
         justifyContent: "center",
       },
       logo: {
         width: 305,
         height: 159,
         marginBottom: 10,
       },
       instructions: {
         color: "#888",
         fontSize: 18,
         marginHorizontal: 15,
       },
       button: {
         backgroundColor: "blue",
         padding: 20,
         borderRadius: 5,
       },
       buttonText: {
         fontSize: 20,
         color: "#fff",
       },
       thumbnail: {
         width: 300,
         height: 300,
         resizeMode: "contain",
       },
       inputContainer: {
           borderBottomColor: '#F5FCFF',
           backgroundColor: '#FFFFFF',
           borderRadius:30,
           borderBottomWidth: 1,
           width:250,
           height:45,
           marginBottom:20,
           flexDirection: 'row',
           alignItems:'center'
       },
       inputs:{
           height:45,
           marginLeft:16,
           borderBottomColor: '#FFFFFF',
           flex:1,
       },
       inputIcon:{
         width:30,
         height:30,
         marginLeft:15,
         justifyContent: 'center'
       },
       buttonContainer: {
         height:45,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         marginBottom:20,
         width:250,
         borderRadius:30,
       },
       loginButton: {
         backgroundColor: "#00b5ec",
       },
       loginText: {
         color: 'white',
       },});

    import { Image,TextInput } from "react-native";
    import * as ImagePicker from "expo-image-picker";
    import * as Sharing from "expo-sharing";

    function DetailsScreen() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Details!</Text>
        </View>
      );
    }

    function HomeScreen({ navigation }) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "green",
          }}
        >
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
          <TouchableOpacity
            onPress={() => alert("Please start type anything you need approval")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      );
    }

    function SettingsScreen({ navigation }) {
      const [selectedImage, setSelectedImage] = React.useState(null);
      let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if (pickerResult.cancelled === true) {
          return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
      };

      let openShareDialogAsync = async () => {
        if (!(await Sharing.isAvailableAsync())) {
          alert(`Uh oh, sharing isn't available on your platform`);
          return;
        }

        await Sharing.shareAsync(selectedImage.localUri);
      };

      if (selectedImage !== null) {
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
            <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
              <Text style={styles.buttonText}>Share this photo</Text>
            </TouchableOpacity>
          </View>
        );
      }

      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri:
                "https://www.presidential-aviation.com/wp-content/uploads/2018/10/Aircraft-Maintenance-1.jpg",
            }}
            style={styles.logo}
          />
          <Text style={styles.instructions}>
            Press the button below to share an image with the customer!
          </Text>

          <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
            <Text style={styles.buttonText}>Upload a photo</Text>
          </TouchableOpacity>
        </View>
      );
    }


    const HomeStackScreen = createStackNavigator({
      Welcome:  {screen:HomeScreen},
      Details:{screen:DetailsScreen},
    },  {
      initialRouteName: 'Welcome',
    }  );


    const SettingsStackScreen = createStackNavigator({
      Welcome:  {screen:SettingsScreen},
      Details:{screen:DetailsScreen},
    },  {
      initialRouteName: 'Welcome',
    }  );


const Tab = createBottomTabNavigator({
  Text:  {screen:HomeStackScreen},
  Image:{screen:SettingsStackScreen},
},  {
  initialRouteName: 'Text',
}  );









const Test = createStackNavigator(
{
  Tab: {
      screen: Tab,
      navigationOptions: ({navigation}) => ({
          gesturesEnabled: false,
      })
  },
              CreateRootNavigator: {
                  screen: CreateRootNavigator,
                  navigationOptions: ({navigation}) => ({
                      gesturesEnabled: false,
                  })
              },
                Tab: {
                    screen: Tab,
                    navigationOptions: ({navigation}) => ({
                        gesturesEnabled: false,
                    })
                },


            },
            {
                headerMode: "none",
                mode: "modal"
            }
        );


const AppContainer = createAppContainer(Test)
export default AppContainer;
