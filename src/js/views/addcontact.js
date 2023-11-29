import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

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
                </form>
            </div>
    </div>
);
