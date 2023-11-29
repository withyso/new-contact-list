import React from "react";
import { Link } from "react-router-dom";
import { Addcontact } from "../views/addcontact";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
				<Link to="/addcontact">
					<button className="btn btn-warning">Add contact</button>
				</Link>
			</div>
		</nav>
	);
};
