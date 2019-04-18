import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";

import {Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { connect } from 'react-redux'
import {getImageFromApi} from '../../API/api'

class FicheTechnique extends Component {
    constructor(props) {
        super(props)
        //this.attaque=this.props.attaque
    }
    componentDidMount(){
        //console.log(this.props.attaque)
    }

    render() {
        return (

            <Container>
                <Content contentContainerStyle={{ flex: 1, padding: 10 }}>
                <Card>
                <CardItem cardBody>
                   <Text style={{ color: '#00F', alignItems: 'center' }}>
                   {this.props.attaque.insecte.nomInsecte}
                   </Text>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: getImageFromApi(this.props.attaque.insecte.insecteImage[0].imageUrl)}} style={{height:200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem cardBody>
                    <Text style={{ color: '#F00' }}>
                    Description
                    </Text>
                </CardItem>
                <CardItem cardBody>
                    <Text>
                      {this.props.attaque.insecte.description}
                    </Text>
                </CardItem>
                     
                <CardItem cardBody>
                   <Text style={{ color: '#00F' }}>
                      Methode de Lutte
                   </Text>
                </CardItem>
                <CardItem cardBody>
                    <Text>
                      {this.props.attaque.insecte.methode}
                    </Text>
                </CardItem>
              </Card>
                </Content>
            </Container>
        )
    }

}


const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})

const mapStateToProps = state => {
  return {
    attaque: state.recherche.attaque
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

//export default HomeScreen;
export default connect(mapStateToProps, mapDispatchToProps)(FicheTechnique);