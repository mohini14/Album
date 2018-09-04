import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetails = ({album}) => {

    const { title,url, artist, thumbnail_image, image, headerTextStyle } = album;
    const {biggerImageViewStyle,  thumbnailStyle, headerContentStyle, thumbnailContainerStyle} = styles;
    return (
        <Card>
            <CardSection>
                <View style = {styles.thumbnailContainerStyle}>
                    <Image style={thumbnailStyle}
                        source={{uri: thumbnail_image}} />
                </View>
                <View style={headerContentStyle}>
                    <Text style = {headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style = {biggerImageViewStyle} source={{uri:image}}></Image>
            </CardSection>
            <CardSection>
                <Button onPress ={() => Linking.openURL(url)}
                >Buy Now
                </Button>
            </CardSection>
            </Card>
    );



};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle:{
        fontSize:20
    },

    thumbnailStyle: {
        height: 50,
        width: 50,
    },

    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        marginLeft:10,

    },

    biggerImageViewStyle:{
        height:300,
        flex:1,
        marginLeft:10,
        marginRight:10,
        width:null
    }

};

export default AlbumDetails;
