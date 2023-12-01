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
			deleteContact: async (id) => {
				try{
					const response = await fetch('https://playground.4geeks.com/apis/fake/contact/'+ id, {
						method: "DELETE",
					});
					if(response.ok){
						console.log('contacto eliminado')
					}
				}catch(error){
					console.log(error);
				}
			},

			getContacts: async () => {
				try{
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/yoel_agenda");
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
			}

		}
	};
};

export default getState;
