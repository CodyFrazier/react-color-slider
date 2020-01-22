import React, { useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState({ red : 127, green : 127, blue : 127 });
	console.log(color);
	
	return (
		<div className="App">
			<input type = 'range' min = '0' max = '255' step = '1' value = '127' onChange = { ({ target }) => { setColor( target.value ) } }/>
			<input type = 'range' min = '0' max = '255' step = '1' value = '127' onChange = { ({ target }) => { setColor( target.value ) } }/>
			<input type = 'range' min = '0' max = '255' step = '1' value = '127' onChange = { ({ target }) => { setColor( target.value ) } }/>
			<div className = 'box' style = {{ backgroundColor : `rgb(${ color.red }, ${ color.green }, ${ color.blue })` }}></div>
		</div>
	);
}

export default App;
