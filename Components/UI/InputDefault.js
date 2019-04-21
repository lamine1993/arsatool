import React from "react";
import { StyleSheet } from "react-native";
import { Input, Card, Button } from 'react-native-elements'

const defaultInput = props => (
    <Input
        underlineColorAndroid="transparent"
        {...props}
        style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
    />
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        marginTop: 8,
        marginBottom: 8
    },
    invalid: {
        backgroundColor: '#f9c0c0',
        borderColor: "red"
    }
});

export default defaultInput;
