import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import React, { useEffect } from "react";
import { useState } from "react";

const API__URL = 'https://playground.4geeks.com/apis/fake/contact/'

const getContacts = async () => {
	try{
		const response = await fetch(API__URL + "/agenda/santiago_agenda");
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

getContacts();

export const Home = () => (
	<div className="text-center mt-5">
		<div className="card mb-3">
		<div className="row g-0">
			<div className="col-md-4">
			<img src="https://openseauserdata.com/files/b261626a159edf64a8a92aa7306053b8.png" className="img-fluid rounded-start" alt="..."/>
			</div>
			<div className="col-md-8">
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
			</div>
			</div>
		</div>
	</div>
	</div>
);
