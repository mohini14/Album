/** @format */
import React from 'react'
import { View, AppRegistry } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/albumList'

const App = () => (
    <View style = {{flex:1}}>
        <Header headerText={'Albums!'} ></Header>
        <AlbumList ></AlbumList>
    </View>
        );

AppRegistry.registerComponent('album', () => App);