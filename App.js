import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';
import calculator, { initialState } from './utils/calculator';

export default class App extends React.Component {
	state = initialState;

	handleTap = (type, value) => {
		this.setState((state) => calculator(type, value, state));
	};
	render() {
		return (
			<View style={styles.container}>
				<StatusBar style="auto" />
				<SafeAreaView>
					<Text style={styles.value}>{parseFloat(this.state.currentValue).toLocaleString()}</Text>
					<Row>
						<Button text="C" theme="secondary" onPress={() => this.handleTap('clear')} />
						<Button text="+/-" theme="secondary" onPress={() => this.handleTap('posneg')} />
						<Button text="%" theme="secondary" onPress={() => this.handleTap('percentage')} />
						<Button text="/" theme="accent" onPress={() => this.handleTap('operator', '/')} />
					</Row>
					<Row>
						<Button text="7" theme="secondary" onPress={() => this.handleTap('number', 7)} />
						<Button text="8" theme="secondary" onPress={() => this.handleTap('number', 8)} />
						<Button text="9" theme="secondary" onPress={() => this.handleTap('number', 9)} />
						<Button text="x" theme="accent" onPress={() => this.handleTap('operator', '*')} />
					</Row>
					<Row>
						<Button text="4" theme="secondary" onPress={() => this.handleTap('number', 4)} />
						<Button text="5" theme="secondary" onPress={() => this.handleTap('number', 5)} />
						<Button text="6" theme="secondary" onPress={() => this.handleTap('number', 6)} />
						<Button text="-" theme="accent" onPress={() => this.handleTap('operator', '-')} />
					</Row>
					<Row>
						<Button text="1" theme="secondary" onPress={() => this.handleTap('number', 1)} />
						<Button text="2" theme="secondary" onPress={() => this.handleTap('number', 2)} />
						<Button text="3" theme="secondary" onPress={() => this.handleTap('number', 3)} />
						<Button text="+" theme="accent" onPress={() => this.handleTap('operator', '+')} />
					</Row>
					<Row>
						<Button text="0" size="double" onPress={() => this.handleTap('number', 0)} />
						<Button text="." onPress={() => this.handleTap('number', '.')} />
						<Button text="=" theme="accent" onPress={() => this.handleTap('equal')} />
					</Row>
				</SafeAreaView>
			</View>
		);
	}
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
