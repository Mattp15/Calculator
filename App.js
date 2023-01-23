import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';

export default function App() {
	const orange = '#F19925'
	const grey = '#202020'
	const white = '#A6A6A6'
	const handlePress = (e) => {
		console.log(e);
	};
	return (
		<View style={styles.container}>
			<SafeAreaView>

			<StatusBar style="auto" />
				</SafeAreaView>

			</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: '#202020',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	grey: {
		backgroundColor: 'grey',
		borderRadius:999,
		fontSize: 30,
		width: 50,
		height: 50,
		flexFlow: 'row wrap',
		textAlign: 'center',
		borderRadius: 99,
		borderWidth: 1,
		borderColor: 'black',
	}, 
	number:{},
	orange:{},
	text:{
		fontSize: 30,
		textAlign: 'center',
		marginTop: 6,
	}
});
