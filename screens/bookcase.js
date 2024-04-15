import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text,
    View
} from 'react-native';

import BookcaseItem from './bookcaseItem';
import {createStackNavigator} from 'react-navigation-stack'


class Aircrafts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: 'Your Aircraft #1',
                    author: 'Challenger 300',
                    thumbnail: 'https://www.jetcraft.com/wp-content/uploads/2018/10/Challenger-300-Ext.jpg'
                },
                {
                    id: 2,
                    title: 'Your Aircraft #2',
                    author: 'Challenger 600',
                    thumbnail: 'http://d16bsf97ryvc45.cloudfront.net/Media/2012/10/challenger_600_exterior.jpg'
                },
                {
                    id: 3,
                    title: 'Your Aircraft #3',
                    author: 'Global 7500',
                    thumbnail: 'https://www.ainonline.com/sites/ainonline.com/files/styles/ain30_fullwidth_large/public/uploads/2019/04/global-7500-profile.jpg?itok=mrScn7KI&timestamp=1555519760'
                }
            ]
        }
    }

    _renderItem = ({item}) => (
        <BookcaseItem
            id={item.id}
            title={item.title}
            author={item.author}
            thumbnail={item.thumbnail}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.books}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const Stack = createStackNavigator(    {Aircrafts:  {screen:Aircrafts},

  },  {
    initialRouteName: 'Aircrafts',
  }  );
export default Stack

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
