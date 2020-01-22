import React, { useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState({ red : 52, green : 52, blue : 52 });
	
	return (
		<div className="App">
			<div className = 'row'>
				<h4>Red</h4>
				<input type = 'range' min = '0' max = '255' step = '1' onChange = { ({ target }) => { setColor( { red : target.value, green : color.green, blue : color.blue } ) } }/>
				<h4>{ color.red }</h4>
			</div>
			<div className = 'row'>
				<h4>Green</h4>
				<input type = 'range' min = '0' max = '255' step = '1' onChange = { ({ target }) => { setColor( { red : color.red, green : target.value, blue : color.blue } ) } }/>
				<h4>{ color.green }</h4>
			</div>
			<div className = 'row'>
				<h4>Blue</h4>
				<input type = 'range' min = '0' max = '255' step = '1' onChange = { ({ target }) => { setColor( { red : color.red, green : color.green, blue : target.value } ) } }/>
				<h4>{ color.blue }</h4>
			</div>
			<div className = 'box' style = {{ backgroundColor : `rgb(${ color.red }, ${ color.green }, ${ color.blue })` }}></div>
		</div>
	);
}

export default App;
