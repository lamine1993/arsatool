import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from '../CustomHeader'
import attaques from '../Helpers/Insectes'
import InsecteItem from './Items/InsecteItem'

class InsecteCausale extends Component {
    constructor(props) {
        super(props)
        this.idCulture=this.props.navigation.state.params.id
        this.nomCulture=this.props.navigation.state.params.nomCulture
        this.localisation=this.props.navigation.state.params.localisation
        this.type=this.props.navigation.state.params.type
         
    }

    _displayInsectes = (id) => {
        
       // this.props.navigation.navigate("FilmDetail",{ idFilm: idFilm })
        this.props.navigation.push('FicheTechnique',{id:id})

    }
    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.titre}>
                        CULTURE
                    </Text>
                    <FlatList
                        
                        data={attaques}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <InsecteItem insecte={item.insecte} displayInsectes={this._displayInsectes}/>}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log("onEndReached")
                          }
                        }
                    />
                </View>
        )
    }

}

export default InsecteCausale

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})