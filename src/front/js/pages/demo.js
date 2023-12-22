import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate ()
	const Login = (e) => {
		e.preventDefault()
		actions.Login(email, password)
		navigate ("/single")
	}

	return (
		
		<div className="container text-center">
			<form className="d-inline-block">
				<div className="col-12 mx-auto mt-5">
					<label for="inputAddress" className="form-label">email</label>
					<input type="text" className="form-control" id="email" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="col-md-12 mx-auto mt-5">
					<label for="inputPassword4" className="form-label">Password</label>
					<input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>

				<div className="col-12 mt-5">
					<button type="submit" className="btn btn-success" onClick={(e) => Login(e)}>Login</button>
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
