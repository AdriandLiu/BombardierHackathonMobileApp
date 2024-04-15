
import React, { Component, useEffect, useState,} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator, SectionList,
} from 'react-native';
import Dialog, {
DialogTitle,
DialogContent,
DialogFooter,
DialogButton,
SlideAnimation,
ScaleAnimation,
} from 'react-native-popup-dialog';

function Approve({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> </Text>
      <Button
        title="Approved"
        onPress={() => navigation.navigate('DetailsA')}
      />
      <Button
        title="Awaiting Approval"
        onPress={() => navigation.navigate('DetailsAA')}
      />
    </View>
  );
};

function DetailsA({ navigation }) {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'Aircraft 1 Challenger 300', data: ['Flight Guidance Computer','Estimated time of service: 5 days', 'Estimated Cost: $2000','You saved: 20%', 'Warrenty: Yes']},
          {title: 'Aircraft 2 Challenger 600', data: ['GPS','Estimated time of service: 2 days', 'Estimated Cost: $600','You saved: 10%', 'Warrenty: No']},
          {title:'Aircraft 3 Global 7500',data:['Flight MGT', 'Estimated time of service: 10 days', 'Estimated Cost: $6000','You saved: 8%', 'Warrenty: No']}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}/>

    </View>
  );
};





class DetailsAA extends Component {
  state = {
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <SectionList
            sections={[
              {title: 'Aircraft 1 Challenger 300', data: ['Main Landing Gear','Estimated time of service: 10 days', 'Estimated Cost: $3000','You saved: 20%', 'Warrenty: Yes']},
                ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}/>
          <Button
            title="Approve"
            onPress={() => {
              this.setState({
                defaultAnimationDialog: true,
              });
            }}
          />
        </View>

        <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          width={0.9}
          visible={this.state.defaultAnimationDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Do you want to approve the above request?"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                bordered
                onPress={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                key="button-1"
              />
              <DialogButton
                text="OK"
                bordered
                onPress={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                key="button-2"
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
            <Text>Once approved, our technician team will start to service this part</Text>
          </DialogContent>
        </Dialog>
      </View>)
}}
import { createStackNavigator } from 'react-navigation-stack';

const Stack = createStackNavigator(  {
   Approve:  {screen:Approve},
   DetailsA:{screen:DetailsA},
   DetailsAA:{screen:DetailsAA},
 },  {
   initialRouteName: 'Approve',
 }  );




export default Stack;



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
