import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate ()
	const registro = (e) => {
		e.preventDefault()
		actions.registro(email, password, username )
		navigate ("/demo")
	}


	return (
		<div className="container">

			<form className="row g-3 mt-5">
				<div className="col-md-6">
					<label htmlFor="inputEmail4" className="form-label">Email</label>
					<input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="col-md-6">
					<label htmlFor="inputPassword4" className="form-label">Password</label>
					<input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div className="col-12">
					<label htmlFor="inputAddress" className="form-label">User Name</label>
					<input type="text" className="form-control" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-success" onClick={(e)=> registro (e)}>Sign in</button>
				</div>
			</form>
		</div>
	);
};
