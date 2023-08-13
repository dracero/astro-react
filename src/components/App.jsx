import React, { useState } from "react";

// Importing app.css is css file to add styling
import "./App.css";

const App = () => {
// Counter is a state initialized to 0
const [counter, setCounter] = useState(0)

const handleClick1 = (env) => {
    env.preventDefault();
    // Counter state is incremented
    setCounter(counter + 1);
    console.log(counter); // Verificar que el valor de counter se está actualizando correctamente
    const url = `/builtwith.json?value=${Number(counter)}`;
    console.log(url); // Verificar que la URL se está construyendo correctamente
    //I need to call the API here and pass counter as a parameter
    fetch(url, { method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data);
        // Aquí puedes hacer lo que quieras con los datos
    }).catch(error => {console.error(error); });
}

// Function is called everytime decrement button is clicked
const handleClick2 = () => {
	// Counter state is decremented
	setCounter(counter - 1)
}

return (
	<div style={{
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '300%',
	width: '100%',
	height: '100%',
	top: '-15%',
	}}>
	Counter App
	<div style={{
		fontSize: '120%',
		position: 'relative',
		top: '10vh',
	}}>
		{counter}
	</div>
	<div className="buttons">
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginRight: '5px',
		backgroundColor: 'green',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={handleClick1}>Increment</button>
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginLeft: '5px',
		backgroundColor: 'red',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={handleClick2}>Decrement</button>
	</div>
	</div>
)
}

export default App
