import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const registro = (e) => {
		e.preventDefault()
		actions.registro(email, username, password)
	}

	return (
		
		<div className="container text-center">
			<form className="d-inline-block">
				<div className="col-12 mx-auto mt-5">
					<label for="inputAddress" className="form-label">User Name</label>
					<input type="text" className="form-control" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div className="col-md-12 mx-auto mt-5">
					<label for="inputPassword4" className="form-label">Password</label>
					<input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>

				<div className="col-12 mt-5">
					<button type="submit" className="btn btn-success" onClick={(e) => registro(e)}>Login</button>
				</div>
			</form>
			<br />
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
