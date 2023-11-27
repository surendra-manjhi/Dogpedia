import React from "react";
import "./Card.css";

export default function Card({ key, img_url, name, origin, link }) {
	return (
		<li key={key} className="card">
			<div className="img-ctn">
				<img src={img_url} alt={name} />
			</div>
			<h4 className="name">{name}</h4>
			<div className="content">
				<div className="origin">{origin}</div>
				<a href={link} target="_blank">
					More
				</a>
			</div>
		</li>
	);
}
