import React from 'react';
import {Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, Alert} from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';

export default class Home extends React.Component {
    static navigationOptions = {
      title: 'Home'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
          <Container>
            <Content>
              <TouchableOpacity activeOpacity={.9} onPress={()=> navigate('Todo')}>
                <View style={style.View}>
                  <Icon ios='ios-list' android="md-list" style={style.icon}/>
                </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.9} onPress={()=> navigate('Notes')}>
              <View style={style.View2}>
                <Icon ios='ios-document-outline' android="md-document" style={style.icon} />
              </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={.9} onPress={()=> navigate('Calendar')}>

              <View style={style.View3}>
                <Icon ios='ios-calendar-outline' android="md-calendar" style={style.icon} />
              </View>

              </TouchableOpacity>

            </Content>
          </Container>

        );
    }
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
 icon: {
 fontSize: 100,


 },
 View: {
 backgroundColor: '#E3D9CA',
 width: width,
 height: height/3.3,
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 },
 View2: {
 backgroundColor: '#95A792',
 width: width,
 height: height/3.3,
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 },
 View3: {
   backgroundColor: '#596C68',
   width: width,
   height: height/3.3,
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },



});
