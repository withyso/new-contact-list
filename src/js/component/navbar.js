import React from "react";
import { Link } from "react-router-dom";
import { Addcontact } from "../views/addcontact";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<Link to="/" className="text-dark">
				<span className="fw-bolder fs-4 mb-0 text-light ms-4">Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-success text-light me-4 fw-bolder">Add contact</button>
				</Link>
			</div>
		</nav>
	);
};
