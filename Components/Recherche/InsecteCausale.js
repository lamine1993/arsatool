import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from "react-native";

import attaques from '../Helpers/Insectes'
import InsecteItem from './Items/InsecteItem'

class InsecteCausale extends Component {
    constructor(props) {
        super(props)
         
    }

    _displayInsectes = (insecte) => {
        
       // this.props.navigation.navigate("FilmDetail",{ idFilm: idFilm })
        this.props.navigation.push('FicheTechnique')

    }
    render() {
        return (
                <View style={styles.container}>
                    <FlatList
                        
                        data={attaques}
                        keyExtractor={(item) => "insectes"+item.id}
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
    },
    container:{
        backgroundColor: '#fff',
    }
})