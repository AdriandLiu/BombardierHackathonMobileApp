import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Button, SectionList
} from 'react-native';
import AircraftStatus from './editAircraft'
import {createStackNavigator} from 'react-navigation-stack'



const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  baseText: {
  fontWeight: 'bold'
},
head:{textAlign: 'center',fontWeight: 'bold',    fontSize: 18,},
})



// import { NavigationContainer } from '@react-navigation/native';

function AddService({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> </Text>
      <Button
        title="Add a service"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Select your customized services </Text>
      <Button
        title=" "
        onPress={() => navigation.push('Details')}
      />
      <SectionList
        sections={[
          {title: 'Brake', data: ['Front', 'Rear']},
          {title: 'Filter', data: ['Air', 'Engine']},
          {title:'Seats',data:['Pilot', 'Passengers']}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}/>

      <Button title="Go Back" onPress={() => navigation.navigate('AddService')} />
      <Button title=" " onPress={() => navigation.goBack()} />
    </View>
  );
}


 const Stack = createStackNavigator(  {
    AddService:  {screen:AddService},
    Details:{screen:DetailsScreen},
  },  {
    initialRouteName: 'AddService',
  }  );
//   Home: {
//     screen: HomeScreen,
//
//   },
//   Details: {
//     screen: DetailsScreen,
//
//   },
// });
// //

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
export default Stack;




//
// export default class AddBook extends Component {
//   render() {
//     return (
//
//
//       <View style={styles.loginButtonSection}>
//            <Button onPress={() => navigation.navigate('services')}
//                    style={styles.loginButton}
//                    title="Add a Service"
//            />
//
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   loginTextSection: {
//    width: '100%',
//    height: '30%',
// },
//
// loginButtonSection: {
//    width: '100%',
//    height: '30%',
//    justifyContent: 'center',
//    alignItems: 'center'
// },
//
// inputText: {
//    marginLeft: '20%',
//    width: '60%'
// },
//
// loginButton: {
//   backgroundColor: 'blue',
//   color: 'white'
// },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   }
// });
