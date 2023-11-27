import { useContext, useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import { Context } from "./Context/context";
import Search from "./Components/Search/Search";

function App() {
	const { data, fetchData } = useContext(Context);

	const [breed, setBreed] = useState("");

	return (
		<div className="App">
			<h1>D🐶G</h1>

			<div className="search-ctn">
				<Search value={breed} setBreed={setBreed} />
				<button
					type="submit"
					onClick={() => {
						if (breed != "") {
							fetchData(breed);
						}
					}}
				>
					🔍
				</button>
			</div>

			<ul>
				{data.length > 0
					? data.map((el) => {
							return (
								<Card
									key={el.id}
									img_url={el.img}
									name={el.breed}
									origin={el.origin}
									link={el.url}
								/>
							);
					  })
					: "No data found"}
			</ul>
		</div>
	);
}

export default App;
