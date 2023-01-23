import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';
import calculator, { initialState } from './utils/calculator';

export default function App() {
	const [state, setState] = useState(initialState);
	const orange = '#F19925';
	const grey = '#202020';
	const white = '#A6A6A6';
	const handleTap = (type, value) => {
		this.setState((state) => calculator(type, value, state));
	};
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<SafeAreaView>
				<Text style={styles.value}>{parseFloat(state.currentValue).toLocaleString()}</Text>
				<Row>
					<Button text="C" theme="secondary" onPress={() => handleTap('clear')} />
					<Button text="+/-" theme="secondary" onPress={() => handleTap('posneg')} />
					<Button text="%" theme="secondary" onPress={() => handleTap('percentage')} />
					<Button text="/" theme="accent" onPress={() => handleTap('operator', '/')} />
				</Row>
				<Row>
					<Button text="7" theme="secondary" onPress={() => handleTap('number', 7)} />
					<Button text="8" theme="secondary" onPress={() => handleTap('number', 8)} />
					<Button text="9" theme="secondary" onPress={() => handleTap('number', 9)} />
					<Button text="x" theme="accent" onPress={() => handleTap('operator', '*')} />
				</Row>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#202020',
		justifyContent: 'center',
	},
	value: {
		color: '#fff',
		fontSize: 40,
		textAlign: 'right',
		marginRight: 20,
		marginBottom: 10,
	},
});
