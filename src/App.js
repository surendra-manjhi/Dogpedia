import { useContext } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import { Context } from "./Context/context";

function App() {
	const context = useContext(Context);

	console.log(context);

	return (
		<div className="App">
			<h1>DOG.</h1>
			<Card />
		</div>
	);
}

export default App;
