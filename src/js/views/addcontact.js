import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Addcontact = () => (
	<div className="text-center mt-5">
		<h1 className="fs-1">Add a new contact</h1>
            <div className="Form box">
                <form>
                    <label> 
                        <p>Full name</p>
                        <input type="text" placeholder="Full name" id="fullname"></input>
                    </label>        
                    <label> 
                         <p>Email</p>
                        <input type="email" placeholder="Enter Email" id="fullemail"></input>
                    </label>
                    <label> 
                        <p>Phone</p>
                        <input type="tel" placeholder="Enter phone" id="fullphone"></input>
                    </label>
                    <label> 
                        <p>Adress</p>
                        <input type="text" placeholder="Enter the Adress" id="fullname"></input>
                    </label>
                    <div className="buttons">
                        <input className="btn btn-success" type="submit" value="Save"/>
                        <Link to="/">
                            <button className="btn btn-dark"> Back to Agenda </button>
                        </Link>
                    </div>
                    
                </form>
            </div>
    </div>
);
