import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from '../CustomHeader'

class InsecteCausale extends Component {

    render() {
        return (

            <Container>
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Button
                        full
                        onPress={() => this.props.navigation.push('FicheTechnique')}>
                        <Text style={{ color: 'white' }}>InsecteCausale</Text>
                    </Button>
                </Content>
            </Container>
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