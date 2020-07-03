import React, { Component } from 'react';
import { Container, Header, Icon } from 'native-base';
import {View , StyleSheet } from "react-native";
import {connect} from "react-redux";
 class NavRight extends Component {
         constructor(props){
             super(props)
             this.state={
                 visible:this.props.user !== null,
             }
         }


     _showCameraProfil(){

         return (

         <View style={{flexDirection:'row'}}>
            <View>
                 <Icon
                     name='camera'
                     onPress={() => {this.props.navigation.navigate('CameraScreen')}}
                     style={{ paddingRight: 10, color:'#fff' }}

                 />
            </View>
         </View>
         )
     }

    render() {

        return this.props.user!==null ? this._showCameraProfil():null
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },


});

//export default NavRight

const mapStateToProps = state => {
    //console.log(state);
    return {
        user:state.connexion.user
    };
};



export default connect(mapStateToProps, null)(NavRight);