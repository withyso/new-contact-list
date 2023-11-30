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

		}
	};
};

export default getState;
