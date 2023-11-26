import React from "react";
import "./Card.css";

export default function Card() {
	return (
		<div className="card">
			<img
				src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
				alt=""
			/>
			<h4 className="name">german</h4>
			<p className="description">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Facilis, dolorum? Debitis, sequi.
			</p>

			<a href="">More</a>
		</div>
	);
}
