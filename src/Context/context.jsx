import { createContext, useState } from "react";

export const Context = createContext(null);

export function ContextProvider(props) {
	const [data, setData] = useState(4);

	async function fetchData(params) {
		const url =
			"https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/German";
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key":
					"6c67610f29msh795c97cf851fa6cp1b4429jsn5726ef1d904b",
				"X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
			},
		};

		try {
			const response = await fetch(url, options);
			const result = await response.json();
			setData(result);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<Context.Provider value={{ data, fetchData }}>
			{props.children}
		</Context.Provider>
	);
}
