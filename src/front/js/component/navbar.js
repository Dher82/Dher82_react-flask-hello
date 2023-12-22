import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate ()
	const Logout = () => {
		
		actions.Logout()
		navigate ("/demo")
	}

	return (
		<nav className="navbar" style={{background: "black"}}>
			<div className="container-fluid" style={{color: "white"}}>
				<h2>Si ya tienes una cuenta, ve al boton de Login a continuación:</h2>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-outline-secondary" style={{color: "white"}}>Login</button>
					</Link>

					<button className="btn btn-outline-secondary" onClick={Logout()} style={{color: "white"}}>Logout</button>

				</div>
			</div>
		</nav>
	);
};
