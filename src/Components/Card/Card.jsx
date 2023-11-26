import React from "react";
import "./Card.css";

export default function Card({img_url, name, desc, link}) {
	return (
		<div className="card">
			<img
				src={img_url}
				alt={name}
			/>
			<h4 className="name">german</h4>
			<p className="description">{desc}
			</p>

			<a href={link}>More</a>
		</div>
	);
}
