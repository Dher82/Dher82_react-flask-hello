import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const registro = (e) => {
		e.preventDefault()
		actions.registro(email, username, password)
	}


	return (
		<div className="container">

			<form class="row g-3">
				<div class="col-md-6">
					<label for="inputEmail4" class="form-label">Email</label>
					<input type="email" class="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div class="col-md-6">
					<label for="inputPassword4" class="form-label">Password</label>
					<input type="password" class="form-control" id="inputPassword4" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div class="col-12">
					<label for="inputAddress" class="form-label">User Name</label>
					<input type="text" class="form-control" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary" onClick={(e)=> registro (e)}>Sign in</button>
				</div>
			</form>
		</div>
	);
};
