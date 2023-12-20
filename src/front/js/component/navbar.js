import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar" style={{background: "black"}}>
			<div className="container-fluid" style={{color: "white"}}>
				<h2>Si ya tienes una cuenta, ve al boton de Login a continuación:</h2>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-outline-secondary" style={{color: "white"}}>Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
