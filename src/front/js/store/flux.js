const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			registro: async (email, password, username) => {
				try {
					const response = await fetch("https://automatic-space-funicular-pj76p6xq4g5h7qq-3001.app.github.dev/api/signup", {
						method: "POST",
						body: JSON.stringify({
							email: email,
							password: password,
							username: username
						}),
						headers: {
							"Content-type": "application/json"
						}
					})

					const data = await response.json()
					console.log(data)

				} catch (error) {
					console.log(error)
				}
			},

			Login: async (email, password) => {
				try {
					const response = await fetch("https://automatic-space-funicular-pj76p6xq4g5h7qq-3001.app.github.dev/api/login", {
						method: "POST",
						body: JSON.stringify({
							email: email,
							password: password,
						}),
						headers: {
							"Content-type": "application/json"
						}
					})

					const data = await response.json()
					console.log(data)
					localStorage.setItem("token", data.access_token)

				} catch (error) {
					console.log(error)
				}
			},

			Logout : () => {
				try {
				  localStorage.removeItem("token");
				  console.log("Logout exitoso");
				//   navigate("/demo")
				} catch (error) {
				  console.log("Error al hacer logout", error);
				}
			}

		}
	};
};

export default getState;
