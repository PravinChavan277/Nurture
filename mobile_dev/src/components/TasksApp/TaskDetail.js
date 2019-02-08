import React from 'react';
import {Text, StyleSheet, View, Image, Linking} from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
//import {Card, CardSection, Button} from '../common/index_old';


const  TaskDetail =({taskProp}) => {

    const {title, artist, thumbnail_image, image, url} = taskProp;

    return(
        <Card>
            <CardSection>
                <View style={styles.thumbNailContainerStyle}>
                    <Image 
                        style={styles.thumbNailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={styles.taskTextContainer}>
                    <Text style={styles.taskTextStyle}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{uri: image}}
                />
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>
                    Mark Done !!
                </Button>
            </CardSection>
        </Card>    
        );
        
};

const styles = StyleSheet.create({
    taskTextContainer: {
      flexDirection: "column",
      justifyContent: 'space-around'      
    },
    
    taskTextStyle:{
        fontSize: 18
    },

    thumbNailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    thumbNailStyle:{
        height:50,
        width:50
    },

    imageStyle:{
        height: 300,
        flex: 1,
        width: null
    },

    taskCardStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',     
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
        position: 'relative'
    }
  });
  
export default TaskDetail;