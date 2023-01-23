import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	const [symbol, setSymbol] = useState([
		{value: 'C', type:"grey"}, {value: '+/-', type:"grey"}, {value: '%', type:"grey"}, {value: '/', type:'orange'}, {value:7, type:"number"}, {value:8, type:"number"}, {value:9, type:"number"}, {value: 'x', type:'orange'}, {value:4, type:'number'}, {value: 5, type:'number'}, {value: 6, type:'number'}, {value: '-', type:'orange'}, {value: 1, type:'number'}, {value:2, type:'number'}, {value:3, type:'number'}, {value: '+', type:'orange'}, {value: 0, type:0}, {value:'.', type:'number'}, {value: '=', type:'orange'}
	])
	const handlePress = (e) => {
		console.log(e);
	};
	return (
		<View style={styles.container}>
			{symbol.map(val => {
				return(
					<Button title={val.value.toString()} onPress={() => {handlePress(val.value)}} style={styles[val.type]}/>

				)
			})}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flexFlow: 'row wrap',
	},
	'grey': {
		width: 16,
		height: 16,
		fontSize: 20,
		color: 'black',
		borderRadius: 99,
		backgroundColor: 'grey',
	}
});
