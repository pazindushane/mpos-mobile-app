import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors } from '../config/Colors'

const ComponentButton = ({ buttonTitle, imgeLocation, buttonColor,fontColor, ...rest }) => {
    return (

        <TouchableOpacity style={styles.buttonContainer(buttonColor)} {...rest}>
            <Image source={imgeLocation} style={styles.btnIcon} />
            <Text style={styles.buttonText(fontColor)}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

// '' colors.addItemBtnColor 

export default ComponentButton

const styles = StyleSheet.create({

    buttonContainer: buttonColor => ({
        width: '100%',
        height: 50,
        backgroundColor: buttonColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        elevation: 5,
        marginBottom: 5,
        marginTop: 5,
    }),
    buttonText: fontColor => ({
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 15,
        color: fontColor
    }),
    btnIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,

    },
    btnImg: {
        width: 40,
        height: 40,
    },
})