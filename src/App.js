import { useContext, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import { Context } from "./Context/context";

function App() {
	const { data, fetchData } = useContext(Context);

	useEffect(() => {
		fetchData("bul");
	}, []);

	console.log(data);

	return (
		<div className="App">
			<h1>D🐶G</h1>
			<ul>
				{data.map((el) => {
					return (
						<Card
							key={el.id}
							img_url={el.img}
							name={el.breed}
							origin={el.origin}
							link={el.url}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
