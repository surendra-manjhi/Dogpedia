import React from "react";
import "./Search.css";

export default function Search({ value, setBreed }) {
	return (
		<input
			type="text"
			name="search"
			id="search"
			value={value}
			placeholder="Search..."
			onChange={(e) => {
				setBreed(e.target.value);
			}}
		/>
	);
}
