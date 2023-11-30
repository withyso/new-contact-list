import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import  Card  from "../component/Card.jsx";
import { Context } from "../store/appContext.js";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [contacts, setContacts ] = useState([]);

	const getContacts = async () => {
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
	}

	const handleContact = async () => {
		const contactInfo = await getContacts();
		setContacts(contactInfo);
	}

	useEffect(() => {
		handleContact();
	}, [])
	

	return (
		<div className="text-center mt-5">
			<h1> Hello friends </h1>
			{
				contacts.map((item) => (
					<Card name={item.full_name} address={item.address} phone={item.phone} email={item.email} key={item.id} />
				))
			}
			
		</div>
		
	);
}
