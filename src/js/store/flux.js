const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			APIURL: 'https://playground.4geeks.com/apis/fake/contact/',
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
				},
			],
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContactsGlobal: async () => {
				try{
					const response = await fetch(store.APIURL + "/agenda/yoel_agenda");
					if(response.status !== 200){
						console.log("Ha ocurrido un error", error)
						return
					}
					const body = await response.json();
					console.log(body);
					return body;
				}catch(error){
					console.log(error);
				}
			},

		}
	};
};

export default getState;
