import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const bottonWidth = screen.width / 4;

const styles = StyleSheet.create({
	text: {
		color: '#fff',
		fontSize: 25,
	},
	button: {
		backgroundColor: '#333333',
	},
	buttonDouble: {},
	buttonSecondary: {},
	buttonAccent: {},
});
export default ({ onPress, text, size, theme }) => {
	const buttonStyles = [styles.button];
	const textStyles = [styles.text];

	if (size === 'double') {
		buttonStyles.push(styles.buttonDouble);
	}
	if (theme === 'secondary') {
		buttonStyles.push(styles.buttonSecondary);
		textStyles.push(styles.textSecondary);
	} else if (theme === 'accent') {
		buttonStyles.push(styles.buttonAccent);
	}

	return (
		<TouchableOpacity onpress={onPress} style={buttonStyles}>
			<Text style={textStyles}>{text}</Text>
		</TouchableOpacity>
	);
};
