import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    SectionList
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'

class AircraftStatus extends Component {
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('id', 'NO-ID');

        return (
            <View style={styles.container}>

                <SectionList
                  sections={[
                    {title: 'Brake', data: ['Serviced','Details: brake pad is serviced, no problem detected']},
                    {title: 'Filter', data: ['In progress','Details: filter check in progress']},
                    {title:'Seats',data:['Waiting in query', 'Details: waiting for service']},
                    {title:'Estimated complete time',data:['20-22 days', 'Based on our AI model,', 'it is likely your aircraft will be ready within 20-22 days']},
                    {title:'Estimated cost',data:['$8000-$12000', 'Based on our AI model,', 'it is likely your aircraft service will cost $8000-$12000']}


                  ]}
                  renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                  renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                  keyExtractor={(item, index) => index}/>

                <View style={styles.title}>
                <Button
                    title="Back To Aircrafts"
                    onPress={() => this.props.navigation.navigate('Tabs')}
                />
                </View>
            </View>


        );
    }
}


const Stack = createStackNavigator(    {AircraftStatus:  {screen:AircraftStatus},

  },  {
    initialRouteName: 'AircraftStatus',
  }  );
export default Stack



const styles = StyleSheet.create({
    container: {
        flex: 1,
   paddingTop: 22,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },  item: {
        padding: 10,
        fontSize: 14,
        height: 44,
      },
      baseText: {
      fontWeight: 'bold'
    },
    head:{textAlign: 'center',fontWeight: 'bold',    fontSize: 18,}
});
