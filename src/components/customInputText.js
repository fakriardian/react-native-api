import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const CustomTextInput = ({
    text,
    onChange,
    multiline,
    placeholder,
    numberOfLines,
}) => (
    <View style={styles.container}>
        <TextInput
            multiline={multiline}
            numberOfLines={numberOfLines}
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChange}
            defaultValue={text}
        />
    </View>
);

CustomTextInput.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
    multiline: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    numberOfLines: PropTypes.number.isRequired,
};

CustomTextInput.defaultProps = {
    multiline: false,
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: '#DDDDDD',
        padding: 10,
    },
    container: {
        marginTop: 20,
    },
});

export default CustomTextInput;